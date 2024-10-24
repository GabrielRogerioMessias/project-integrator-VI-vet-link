import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { style } from "./styles";

export type DescriptionItem = {
  type: "text" | "image";
  content: string;
};

interface EditableDescriptionProps {
  title: string;
  descriptionContent: DescriptionItem[];
}

const EditableDescription: React.FC<EditableDescriptionProps> = ({
  title,
  descriptionContent,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View style={style.separator} />
      <ScrollView style={style.descriptionContainer}>
        {descriptionContent.map((item, index) => {
          if (item.type === "text") {
            return (
              <Text key={index} style={style.description}>
                {item.content}
              </Text>
            );
          } else if (item.type === "image") {
            return (
              <Image
                key={index}
                source={{ uri: item.content }}
                style={style.image}
              />
            );
          }
          return null;
        })}
      </ScrollView>
    </View>
  );
};

export default EditableDescription;
