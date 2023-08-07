/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            min: 0,
            max: 100
        },
        x: {
            ticks: { color: 'rgba(0, 220, 195)' }
        }
    }
};


const MenorExistencia = ({Product}) => {
    const sortedData = [...Product].sort((a, b) => a.Unidades - b.Unidades);

    const bottomProducts = sortedData.slice(0, 5);
    const bottomLabels = bottomProducts.map(product => product.NombreProducto);
    const bottomData = bottomProducts.map(product => product.Unidades);

    var midata = {
        labels: [...bottomLabels],
        datasets: [
            {
                label: 'Existencias de Productos',
                data: [...bottomData],
                backgroundColor: 'rgba(0, 220, 195, 0.5)',
            }
        ]
    };


    return <Bar data={midata} options={misoptions} />
}

export default MenorExistencia
