import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Graphs({ data }) {
    const priceDistribution = (data) => {
        const priceRanges = [0, 100, 200, 300, 400, 500];
        const priceCounts = new Array(priceRanges.length - 1).fill(0);

        data.forEach((element) => {
            const prix = element.prix;
            for (let i = 0; i < priceRanges.length - 1; i++) {
                if (prix >= priceRanges[i] && prix < priceRanges[i + 1]) {
                    priceCounts[i]++;
                    break;
                }
            }
        });

        return {
            labels: priceRanges.slice(0, -1).map((price, index) => `${price}-${priceRanges[index + 1]}`),
            datasets: [
                {
                    label: "",
                    data: priceCounts,
                    fill: false,
                    backgroundColor: "grey"
                }
            ]
        }
    }

    const ageDistribution = (data) => {
        const ages = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        const ageCounts = new Array(ages.length).fill(0);
        data.forEach((element) => {
            const age = element.age;
            const index = ages.indexOf(age);
            if (index !== -1) {
                ageCounts[index]++;
            }
        });

        return {
            labels: ages.map((age) => `${age}`),
            datasets: [
                {
                    label: "",
                    data: ageCounts,
                    fill: false,
                    backgroundColor: "grey"
                },
            ],
        };
    };

    const priceDistributionData = priceDistribution(data);

    return (
        <div>
            <h1>Nombre de personnes par rapport au prix</h1>
            <Bar data={priceDistributionData} />
            <h1>Nombre de personnes par rapport a l'age</h1>
            <Bar data={ageDistribution(data)} />
        </div>
    )
}
