import { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import SeatCard from "./components/SeatCard";

export interface Seat {
  seatNumber: number;
  isSelected: boolean;
  isBooked: boolean;
}

const initSeat: Seat[] = Array.from({ length: 40 }, (_, i) => ({
  seatNumber: i + 1,
  isSelected: false,
  isBooked: i >= 30 ? true : false,
}));

export default function App() {
  const [seats, setSeats] = useState<Seat[]>(initSeat);

  const handleSelect = (seatNumber: number) => {
    const seat = seats.find((item) => item.seatNumber === seatNumber);
    if (!seat) return;

    if (seat.isBooked) {
      Alert.alert("Thông báo", "Ghế này đã có người book");
      return;
    }

    setSeats((prev) =>
      prev.map((item) => {
        if (item.seatNumber === seatNumber) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }

        return item;
      })
    );
  };

  const onSubmit = () => {
    setSeats((prev) =>
      prev.map((item) => {
        if (item.isSelected) {
          return {
            ...item,
            isSelected: false,
            isBooked: true,
          };
        }

        return item;
      })
    );
  };

  const handleConfirm = () => {
    Alert.alert("Xác nhận", "Bạn muốn đặt những ghế ngồi này?", [
      {
        text: "Đồng ý",
        onPress: () => onSubmit(),
      },
      {
        text: "Hủy bỏ",
      },
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Đặt ghế ngồi" onPress={() => handleConfirm()}></Button>
        <FlatList
          data={seats}
          numColumns={4}
          keyExtractor={(seat) => seat.seatNumber.toString()}
          renderItem={({ item }) => (
            <SeatCard onClick={handleSelect} seat={item}></SeatCard>
          )}
        ></FlatList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
});
