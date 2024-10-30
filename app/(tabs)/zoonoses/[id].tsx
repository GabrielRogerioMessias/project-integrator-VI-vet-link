import React, { useEffect, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditableDescription, {
  DescriptionItem,
} from "../../components/EditableDescription";
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
    introducao: [] as DescriptionItem[],
    transmissao: [] as DescriptionItem[],
    sinais_clinicos: [] as DescriptionItem[],
    diagnostico: [] as DescriptionItem[],
    tratamento: [] as DescriptionItem[],
    profilaxia: [] as DescriptionItem[],
    prevencao: [] as DescriptionItem[],
    humano: [] as DescriptionItem[],
    referencia: [] as DescriptionItem[],
  });

  useEffect(() => {
    const zoonoseTitle =
      zoonosesTitles[zoonoseId as keyof typeof zoonosesTitles] || "Zoonose";
    navigation.setOptions({ title: zoonoseTitle });
  }, [zoonoseId, navigation]);

  useEffect(() => {
    const fetchLocalData = async () => {
      try {
        const localData = await AsyncStorage.getItem(`zoonose_${zoonoseId}`);
        if (localData) {
          setDescriptions(JSON.parse(localData));
        }
      } catch (error) {
        console.log("Erro ao carregar dados locais:", error);
      }
    };

    const listenToFirestoreUpdates = () => {
      const unsubscribe = firestore()
        .collection("zoonoses")
        .doc(zoonoseId)
        .onSnapshot(async (doc) => {
          if (doc.exists) {
            const data = doc.data();
            const updatedDescriptions = {
              introducao: data?.introducao || [],
              transmissao: data?.transmissao || [],
              sinais_clinicos: data?.sinais_clinicos || [],
              diagnostico: data?.diagnostico || [],
              tratamento: data?.tratamento || [],
              profilaxia: data?.profilaxia || [],
              prevencao: data?.prevencao || [],
              humano: data?.humano || [],
              referencia: data?.referencia || [],
            };

            setDescriptions(updatedDescriptions);
            await AsyncStorage.setItem(
              `zoonose_${zoonoseId}`,
              JSON.stringify(updatedDescriptions)
            );
          }
        });

      return unsubscribe;
    };

    fetchLocalData();
    const unsubscribe = listenToFirestoreUpdates();

    return () => unsubscribe();
  }, [zoonoseId]);

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={style.container}>
          {descriptions.introducao.length > 0 && (
            <EditableDescription
              title="INTRODUÇÃO"
              descriptionContent={descriptions.introducao}
            />
          )}
          {descriptions.transmissao.length > 0 && (
            <EditableDescription
              title="TRANSMISSÃO"
              descriptionContent={descriptions.transmissao}
            />
          )}
          {descriptions.sinais_clinicos.length > 0 && (
            <EditableDescription
              title="SINAIS CLÍNICOS"
              descriptionContent={descriptions.sinais_clinicos}
            />
          )}
          {descriptions.diagnostico.length > 0 && (
            <EditableDescription
              title="DIAGNÓSTICO"
              descriptionContent={descriptions.diagnostico}
            />
          )}
          {descriptions.tratamento.length > 0 && (
            <EditableDescription
              title="TRATAMENTO"
              descriptionContent={descriptions.tratamento}
            />
          )}
          {descriptions.profilaxia.length > 0 && (
            <EditableDescription
              title="PROFILAXIA"
              descriptionContent={descriptions.profilaxia}
            />
          )}
          {descriptions.prevencao.length > 0 && (
            <EditableDescription
              title="PREVENÇÃO"
              descriptionContent={descriptions.prevencao}
            />
          )}
          {descriptions.humano.length > 0 && (
            <EditableDescription
              title="SERES HUMANOS"
              descriptionContent={descriptions.humano}
            />
          )}
          {descriptions.referencia.length > 0 && (
            <EditableDescription
              title="REFERÊNCIAS"
              descriptionContent={descriptions.referencia}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
