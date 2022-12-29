import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

export default function SeatsModal({
  isOpen,
  onClose,
  seatsData,
  setValue,
  index,
  setSeatSelected,
}) {
  const seatClicked = (seat) => {
    setValue(`details.${index}.idSeats`, seat.seatsId);
    setSeatSelected(seat.seatsNumber);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose seat for passenger {index + 1}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="space-around">
            {seatsData.map((group, index) => {
              return (
                <Flex
                  flexDir="column"
                  alignItems="center"
                  gap="0.5rem"
                  key={index}
                >
                  <Heading>{group.groupSeats}</Heading>
                  {group.seatsList.map((seat) => {
                    return (
                      <Button
                        key={seat.seatsId}
                        w="100%"
                        colorScheme={
                          seat.statusSeats === "AVAILABLE" && seat.canBook
                            ? "blueHue"
                            : "gray"
                        }
                        disabled={
                          seat.statusSeats === "AVAILABLE" && seat.canBook
                            ? false
                            : true
                        }
                        onClick={() => seatClicked(seat)}
                      >
                        {seat.seatsNumber}
                      </Button>
                    );
                  })}
                </Flex>
              );
            })}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
