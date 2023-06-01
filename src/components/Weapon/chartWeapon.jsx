import react from "react";
import { useEffect, useState, useRef } from "react";
import { ImageBackground, Image, View, Dimensions, Text, Pressable, ScrollView } from "react-native";

import { LineChart } from "react-native-chart-kit";


const ChartWeapon = (root) => {
    const [datos, setDatos] = useState(root.datos);
    const datosInvertidos = datos.slice().reverse();
    const activeIndex = root.activeIndex;
    const labels = datosInvertidos.map((dato) => dato.data[activeIndex].fecha);
    const data = datosInvertidos.map((dato) => stringToNumber(dato.data[activeIndex].shotsHit)/stringToNumber(dato.data[activeIndex].shotsFired)*100);
    //console.log(datos[0].data[0]);


    var table = {
        labels: labels,
        datasets: [
            {
                data: data,
                color: (opacity = 1) => `rgba(255, 70, 70, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: [" Shots Acc %"] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#08130D",
        backgroundGradientFromOpacity: 0.2,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.8,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false, // optional
    };

   //string to number remove % and ,
    function stringToNumber(string) {
        var number = string.replace(/,/g, '');
        number = number.replace(/%/g, '');
        return number;
    }

    return (
        <LineChart
                bezier={true}
                data={table}
                width={Dimensions.get('window').width * 0.9}
                height={Dimensions.get('window').height * 0.3}
                verticalLabelRotation={20}
                chartConfig={chartConfig}
                yAxisSuffix="%"
                style={{ borderRadius: 25, borderWidth: 1, borderColor: "black" }}
            />


    )
}

export default ChartWeapon;