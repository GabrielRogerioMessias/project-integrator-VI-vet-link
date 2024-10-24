import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import EditableDescription from "../../components/EditableDescription";
import { globalStyles } from "../../global/styles";
import { useNavigation } from "@react-navigation/native";
import { style } from "./styles";

const zoonosesTitles = {
  leishmaniose: "Leishmaniose",
  leptospirose: "Leptospirose",
  raiva: "Raiva",
  toxoplasmose: "Toxoplasmose",
};

export default function ZoonosesPage() {
  const { id } = useLocalSearchParams();
  const zoonoseId = Array.isArray(id) ? id[0] : id;
  const navigation = useNavigation();

  const [descriptions, setDescriptions] = useState({
    introducao: "",
    transmissao: "",
    sinais_clinicos: "",
    diagnostico: "",
    tratamento: "",
  });

  useEffect(() => {
    const zoonoseTitle =
      zoonosesTitles[zoonoseId as keyof typeof zoonosesTitles] || "Zoonose";
    navigation.setOptions({ title: zoonoseTitle });
  }, [zoonoseId, navigation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const zoonoseRef = firestore().collection("zoonoses").doc(zoonoseId);
        const doc = await zoonoseRef.get();

        if (doc.exists) {
          const data = doc.data();
          setDescriptions({
            introducao: data?.introducao || "",
            transmissao: data?.transmissao || "",
            sinais_clinicos: data?.sinais_clinicos || "",
            diagnostico: data?.diagnostico || "",
            tratamento: data?.tratamento || "",
          });
        } else {
          console.log("Documento não encontrado!");
        }
      } catch (error) {
        console.log("Erro ao buscar dados:", error);
      }
    };

    if (zoonoseId) {
      fetchData();
    }
  }, [zoonoseId]);

  return (
    <View style={globalStyles.container}>
      <View style={style.container}>
        <EditableDescription
          title="Introdução"
          descriptionContent={[
            { type: "text", content: descriptions.introducao },
          ]}
        />
        <EditableDescription
          title="Transmissão"
          descriptionContent={[
            { type: "text", content: descriptions.transmissao },
          ]}
        />
        <EditableDescription
          title="Sinais Clínicos"
          descriptionContent={[
            { type: "text", content: descriptions.sinais_clinicos },
          ]}
        />
        <EditableDescription
          title="Diagnóstico"
          descriptionContent={[
            { type: "text", content: descriptions.diagnostico },
          ]}
        />
        <EditableDescription
          title="Tratamento"
          descriptionContent={[
            { type: "text", content: descriptions.tratamento },
          ]}
        />
      </View>
    </View>
  );
}
