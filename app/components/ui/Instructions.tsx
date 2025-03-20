"use client";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { PortableText, PortableTextBlock } from "next-sanity";
import { introComponents } from "../../lib/portableTextComponents";
import Image from "next/image";

export function Instructions({ instructions }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState<
    "auto" | "center" | "top" | "top-center" | "bottom" | "bottom-center"
  >("auto");

  useEffect(() => {
    setTimeout(() => {
      console.log("Should be open");
      onOpen();
    }, 500);
  }, [onOpen]);
  return (
    <Modal
      isOpen={isOpen}
      placement={modalPlacement}
      onOpenChange={onOpenChange}
      size="5xl"
      className="max-h-[95vh] overflow-y-auto"
      backdrop="blur"
      classNames={{
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 relative">
              <Image
                src={"/logos/Logo Icon.png"}
                width={100}
                height={100}
                className=" top-5 right-5 md:absolute hidden"
                alt="EYW Icon"
              />
              <Image
                src={"/logos/Logo Icon.png"}
                width={50}
                height={50}
                className=" top-5 right-5 md:hidden absolute"
                alt="EYW Icon"
              />
            </ModalHeader>
            <ModalBody className="flex flex-col w-full text-pretty md:text-justify text-large text-eywnavy-1000 md:px-10 ">
              <PortableText value={instructions} components={introComponents} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
