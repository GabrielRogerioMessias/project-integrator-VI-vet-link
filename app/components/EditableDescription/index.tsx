import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";

export type TextStyle = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  small?: boolean;
  underline?: boolean;
  color?: string;
};

export type DescriptionItem =
  | { type: "text"; content: TextStyle[] }
  | { type: "image"; content: string; sensitive?: boolean };

interface EditableDescriptionProps {
  title: string;
  descriptionContent: DescriptionItem[];
}

const EditableDescription: React.FC<EditableDescriptionProps> = ({
  title,
  descriptionContent,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [revealedSensitiveImages, setRevealedSensitiveImages] = useState<
    Record<number, boolean>
  >({});

  const openImageModal = (imageUri: string) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const handleSensitiveImageClick = (index: number) => {
    setRevealedSensitiveImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View style={style.separator} />
      <ScrollView
        nestedScrollEnabled={true}
        persistentScrollbar={true}
        style={style.descriptionContainer}
      >
        {descriptionContent.map((item, index) => {
          if (item.type === "text") {
            return (
              <Text key={index} style={style.description}>
                {item.content.map((textStyle, idx) => (
                  <Text
                    key={idx}
                    style={{
                      fontWeight: textStyle.bold ? "bold" : "normal",
                      fontStyle: textStyle.italic ? "italic" : "normal",
                      fontSize: textStyle.small ? 12 : 16,
                      textDecorationLine: textStyle.underline
                        ? "underline"
                        : "none",
                      color: textStyle.color || "black",
                    }}
                  >
                    {textStyle.text}
                  </Text>
                ))}
              </Text>
            );
          } else if (item.type === "image") {
            return (
              <TouchableOpacity
                style={style.imageContainer}
                key={index}
                onPress={() =>
                  item.sensitive && !revealedSensitiveImages[index]
                    ? handleSensitiveImageClick(index)
                    : openImageModal(item.content)
                }
              >
                {item.sensitive && !revealedSensitiveImages[index] ? (
                  <View style={style.sensitiveImageContainer}>
                    <Text style={[style.sensitiveText, style.image]}>
                      Imagem Sensível{"\n"}Clique para exibir
                    </Text>
                    <Image source={{ uri: item.content }} style={style.image} />
                  </View>
                ) : (
                  <Image source={{ uri: item.content }} style={style.image} />
                )}
              </TouchableOpacity>
            );
          }
          return null;
        })}
      </ScrollView>

      {selectedImage && (
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={closeImageModal}
        >
          <TouchableOpacity
            style={style.modalBackground}
            onPress={closeImageModal}
          >
            <Image
              source={{ uri: selectedImage }}
              style={style.fullscreenImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default EditableDescription;
