import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPamList } from "../App";
import { Bike } from "../types/Bike";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackPamList, "BikeList">;

const { width } = Dimensions.get("window");
const GAP = 12;
const CARD_W = (width - 16 * 2 - GAP) / 2;

const PINK = "#FCE7EA";
const ORANGE = "#F08A3E";
const PRIMARY = "#EE3F43";
const MUTED = "#757575";

type Tab = "All" | "RoadBike" | "Moutain";

const API_URL = "https://68d67dd6c2a1754b426aeeb4.mockapi.io/bikes";

const getBikeImage = (imgPath: string) => {
  const match = imgPath.match(/bike_(\d)\.png$/);
  const id = match ? Number(match[1]) : 1;
  switch (id) {
    case 1:
      return require("../assets/imgs/bike_1.png");
    case 2:
      return require("../assets/imgs/bike_2.png");
    case 3:
      return require("../assets/imgs/bike_3.png");
    case 4:
      return require("../assets/imgs/bike_4.png");
    case 5:
      return require("../assets/imgs/bike_5.png");
    case 6:
      return require("../assets/imgs/bike_6.png");
    default:
      return require("../assets/imgs/bike_1.png");
  }
};

const BikeListScreen = ({ navigation }: Props) => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [tab, setTab] = useState<Tab>("All");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const fetchBikes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Bike[] = await res.json();
      setBikes(data);
    } catch (e: any) {
      setError(e?.message || "Fetch failed");
    } finally {
      setLoading(false);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchBikes();
    } finally {
      setRefreshing(false);
    }
  }, [fetchBikes]);

  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  const filtered = useMemo(() => {
    if (tab === "All") return bikes;
    return bikes.filter((b) => b.type === tab);
  }, [bikes, tab]);

  const renderCard = ({ item, index }: { item: Bike; index: number }) => {
    const id = `${item.title}-${index}`;
    const liked = likes[id];
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() => navigation.navigate("BikeDetails", { bike: item })}
      >
        <View style={styles.imageWrap}>
          <TouchableOpacity
            style={styles.likeBtn}
            onPress={() => setLikes((s) => ({ ...s, [id]: !s[id] }))}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={18}
              color={liked ? PRIMARY : MUTED}
            />
          </TouchableOpacity>
          <Image source={getBikeImage(item.img)} style={styles.image} />
        </View>

        <Text numberOfLines={1} style={styles.cardTitle}>
          {item.title}
        </Text>
        <Text style={styles.price}>
          <Text style={{ color: ORANGE }}>$ </Text>
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The world’s Best Bike</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {(["All", "RoadBike", "Moutain"] as Tab[]).map((t) => {
          const active = t === tab;
          return (
            <TouchableOpacity
              key={t}
              onPress={() => setTab(t)}
              style={[styles.tab, active && styles.tabActive]}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {t === "RoadBike" ? "Roadbike" : t}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={PRIMARY} />
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={{ color: "#dc2626", marginBottom: 8 }}>
            Lỗi tải dữ liệu: {error}
          </Text>
          <TouchableOpacity style={styles.retry} onPress={fetchBikes}>
            <Text style={{ color: "#fff", fontWeight: "800" }}>Thử lại</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(_, i) => String(i)}
          numColumns={2}
          columnWrapperStyle={{ gap: GAP }}
          contentContainerStyle={{ paddingBottom: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default BikeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  heading: {
    fontSize: 26,
    fontWeight: "900",
    color: "#e11d48",
    marginBottom: 12,
  },
  tabs: { flexDirection: "row", gap: 10, marginBottom: 12 },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F3C6C6",
    backgroundColor: "#fff",
  },
  tabActive: { backgroundColor: "#FFE5E6", borderColor: "#FFC9CB" },
  tabText: { color: MUTED, fontWeight: "700" },
  tabTextActive: { color: PRIMARY },
  card: {
    width: CARD_W,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  imageWrap: {
    backgroundColor: PINK,
    height: CARD_W * 0.72,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    position: "relative",
  },
  image: { width: "88%", height: "88%", resizeMode: "contain" },
  likeBtn: {
    position: "absolute",
    top: 8,
    left: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: { fontSize: 16, fontWeight: "800", color: "#333" },
  price: { marginTop: 2, fontWeight: "800", color: "#333" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  retry: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
