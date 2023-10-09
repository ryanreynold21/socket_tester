import { BarElement, CategoryScale, Chart, LineElement, LinearScale, PointElement } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
)

const NumberChart = ( { number } ) =>
{
    const [ dataSeq, setDataseq ] = useState( {
        labels: [],
        datasets: [
            {
                // label: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
                data: [],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    } )


    useEffect( () =>
    {
        setDataseq( ( prev ) => ( {
            ...prev,
            labels: [ ...prev.labels, new Date().toLocaleTimeString() ],
            datasets: [
                {
                    ...prev.datasets[ 0 ],
                    data: [ ...prev.datasets[ 0 ].data, number ],
                },
            ],
        } ) )

        if ( dataSeq.labels.length >= 30 )
        {
            setDataseq( ( prev ) => ( {
                ...prev,
                labels: prev.labels.slice( 1 ),
                datasets: [ {
                    ...prev.datasets[ 0 ],
                    data: prev.datasets[ 0 ].data.slice( 1 )
                } ]
            } ) )
        }
    }, [ dataSeq ] )

    return (
        <div>1
            <h2>Bar NumberChart Example</h2>
            <div className=" w-[800px] h-[500px] bg-stone-900 overflow-visible">
                <Line data={ dataSeq } />
            </div>
        </div>
    )
}

export default NumberChart
