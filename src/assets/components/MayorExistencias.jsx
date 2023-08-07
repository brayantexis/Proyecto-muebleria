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

const MayorExistencias = ({ Product }) => { 
    const sortedData = [...Product].sort((a, b) => a.Unidades - b.Unidades);
    const topProducts = sortedData.slice(-5).reverse();

    const topLabels = topProducts.map(product => product.NombreProducto);


    const topData = topProducts.map(product => product.Unidades);


    let midata = {
        labels: [...topLabels],
        datasets: [
            {
                label: 'Existencias de Productos',
                data: [...topData],
                backgroundColor: 'rgba(0, 220, 195, 0.5)',
            }
        ]
    };


    return <Bar data={midata} options={misoptions} />
}
  

export default MayorExistencias
