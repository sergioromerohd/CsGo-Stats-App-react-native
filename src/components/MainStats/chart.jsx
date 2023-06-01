import react from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { BorderOutlined } from "@ant-design/icons";

const Chart = (props) => {

    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    };

    //crea una variable que contiene los datos del grafico le da los datos si recibe por props split 3

    const {value1 , value2 , value3} = props;
    const {name1 , name2 , name3} = props;
    const {color1 , color2 , color3} = props;

    const chartdata=props.splits === "3" ? [
        {
            name: name1,
            value: parseInt(value1),
            color: color1,
            legendFontColor: "#7F7F7F",
            legendFontSize: 13,
        },
        {
            name: name2,
            value: parseInt(value2),
            color: color2,
            legendFontColor: "#7F7F7F",
            legendFontSize: 13,
        },
        {
            name: name3,
            value: parseInt(value3),
            color: color3,
            legendFontColor: "#7F7F7F",
            legendFontSize: 13,
        }
    ]:props.splits === "2" ? [
        {
            name: name1,
            value: parseInt(value1),
            color: color1,
            legendFontColor: "#7F7F7F",
            legendFontSize: 13,
        },
        {
            name: name2,
            value: parseInt(value2),
            color: color2,
            legendFontColor: "#7F7F7F",
            legendFontSize: 13,
        }
    ]:[
        {
            name: name1,
            value: parseInt(value1),
            color: color1,
            legendFontColor: "#7F7F7F",
            legendFontSize: 13,
        }
    ];

    return (
        <>
            <PieChart
                data={chartdata}
                width={Dimensions.get("window").width -100}
                height={Dimensions.get("window").height / 5}
                chartConfig={chartConfig}
                accessor={"value"}
                center={[0, 0]}
                hasLegend={true}
                absolute
                style={{
                    borderRadius: 16,
                    borderColor: "#000000",
                    shadowColor: "gray",
                    shadowOffset: {
                        width: 1,
                        height: 2,
                    },
                    shadowOpacity: 0.4,
                }}
            />
        </>
    );
}


export default Chart;
