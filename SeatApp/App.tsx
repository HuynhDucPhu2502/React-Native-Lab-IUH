import { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SeatApp from "./components/SeatApp";

export interface Seat {
  seatNumber: number;
  isSelected: boolean;
  isBooked: boolean;
}

const initSeats: Seat[] = Array.from({ length: 40 }, (_, i) => {
  return {
    seatNumber: i + 1,
    isSelected: false,
    isBooked: false,
  };
});

export default function App() {
  const [seats, setSeats] = useState<Seat[]>(initSeats);

  const handleSelect = (seatNumber: number) => {
    const seat = seats.find((item) => item.seatNumber === seatNumber);
    if (!seat) return;

    if (seat.isBooked) {
      Alert.alert("Thông báo", "Ghế ngồi này đã được đặt");
      return;
    }

    setSeats((prev) =>
      prev.map((x) => {
        if (x.seatNumber === seatNumber) {
          return {
            ...x,
            isSelected: !x.isSelected,
          };
        }
        return x;
      })
    );
  };

  const handleSubmit = () => {
    setSeats((prev) =>
      prev.map((x) => {
        if (x.isSelected) {
          return {
            ...x,
            isSelected: false,
            isBooked: true,
          };
        }
        return x;
      })
    );
  };

  const handleConfirm = () => {
    Alert.alert("Xác nhận", "Bạn muốn đặt những hàng ghế này chứ?", [
      { text: "Đồng ý", onPress: () => handleSubmit() },
      { text: "Hủy" },
    ]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button title="Đặt ghế" onPress={handleConfirm}></Button>
        <FlatList
          data={seats}
          numColumns={4}
          keyExtractor={(item) => item.seatNumber.toString()}
          renderItem={({ item }) => (
            <SeatApp onClick={handleSelect} seat={item}></SeatApp>
          )}
        ></FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
