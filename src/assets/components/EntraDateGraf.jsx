/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const EntraDateGraf = ({data}) => {
    const NumEntradas = Array.from({ length: 12 }, () => 0); //
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    data.forEach(entry => {
        const date = new Date(entry.FechaEntrada);
        const month = date.getMonth();
        NumEntradas[month]++;
    });

    const midata = {
        labels: meses,
        datasets: [
            {
                label: 'Salidas/Entradas',
                data: NumEntradas,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
        ],
    };

    const misoptions = {
        scales: {
            y: {
                min: 0,
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)' },
            },
        },
    };

    return <Line data={midata} options={misoptions}/>
}

export default EntraDateGraf
