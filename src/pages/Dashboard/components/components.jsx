/* eslint-disable no-unneeded-ternary */
/* eslint-disable multiline-ternary */
import { RxTriangleDown } from 'react-icons/rx';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import {
  getAllColor,
  getAllEspecies,
  getAllMascotas,
  getAllRazas,
  getEspecieById,
  getRazaById
} from '../../../services/Dashboard/index';
import { useMainStore } from '../store/index.js';

export const Graph = ({ Name, Graph, click, data }) => {
  return (
    <div className='relative col-span-1 mx-[5%] my-[2vh] flex h-[45vh] w-[90%] flex-col items-center justify-center rounded-1/7 bg-[#d9d9d9]'>
      <div className='relative flex w-full items-center justify-center'>
        <p className='my-[1vh] text-[2.5vh] font-bold text-[#757474] '>
          {Name}
        </p>
        {data ? (
          <button
            className='y-[100%] absolute left-[37vw] top-[1vh] w-[10vh] rounded-[1vw] bg-green text-white outline-none'
            onClick={click}
          >
            Datos
          </button>
        ) : (
          ''
        )}
      </div>
      <div className='z-0 flex h-[40vh] justify-center'>{Graph}</div>
    </div>
  );
};
export const EspecieSelect = ({ onChange, value }) => {
  const [Change, SetChange] = useState(false);

  const [especieSelected, setEspecieSelected] = useState(null);

  const especies = useMainStore((state) => state.especies);

  return (
    <div className='relative'>
      <button
        className='z-50 flex h-[5vh] w-[15vh] items-center justify-center rounded-[1vw] border-[.5vh] border-green text-[#757474]'
        onClick={() => {
          Change ? SetChange(false) : SetChange(true);
        }}
      >
        <p className='mx-3 text-[1.8vh] font-bold text-[#757474] '>
          {value ? value.nombre_esp : 'Especie'}
        </p>
        <RxTriangleDown />
      </button>
      <div
        className={
          Change
            ? 'absolute top-[5.5vh] z-50 flex h-auto w-full  flex-col items-center justify-center rounded-[2vw] border-[.5vh] border-green bg-[#d9d9d9] p-[.2vh]'
            : 'h-0 w-0 opacity-0'
        }
      >
        {especies?.map((esp, i) => (
          <button
            key={i}
            className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-green p-[.5vh] text-[2vh] font-bold text-[#757474]'
            onClick={() => {
              SetChange(false);
              onChange(esp);
            }}
          >
            {esp.nombre_esp}
          </button>
        ))}
      </div>
    </div>
  );
};

export const ListThings = ({ title, data = [] }) => {
  return (
    <div className='h-full w-full p-1'>
      <div className='flex h-[10%] w-full items-center justify-center text-[2.5vh] text-[#555555]'>
        {title}
      </div>
      <div className='grid-flow-row-3 grid grid-cols-2 gap-2 text-center text-[2vh] '>
        {data.map((el, i) => (
          <div className='mx-[5%] w-[90%]' key={i}>
            <h2 className='flex items-center justify-center text-[2vh] font-black text-black'>
              {el.sectionTitle ?? el.sectionTitle}
            </h2>
            <ul className='text-[#434343]'>
              {el.sectionElements ??
                el.sectionElements.map((sec, ii) => (
                  <li key={ii} className='my-[.5vh] text-left text-[.8rem] '>
                    - {sec}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export const DataEstadistic = ({
  Type,
  Media,
  Moda,
  Mediana,
  SubX,
  SubMo,
  SubMd,
  click,
  children
}) => {
  return (
    <button
      onClick={click}
      className='relative col-span-1 mx-[5%] my-[2vh] flex h-[45vh] w-[90%] cursor-pointer flex-col items-center justify-center rounded-1/7 border-none bg-[#d9d9d9] bg-[transparent] outline-none'
    >
      <div className='flex h-full w-full flex-col rounded-1/7 bg-[#d9d9d9] px-[.5vw] py-[1vh]'>
        {children ? (
          children
        ) : (
          <>
            <div className='flex h-[50%] w-[100%] '>
              <div className=' relative mx-[15%] flex flex-col  items-center rounded-1/7'>
                <p className='absolute z-0 text-[15vh] font-black text-[#6ED4A5] opacity-[.2]'>
                  X̅
                </p>
                <div>
                  <h2 className='relative z-10 text-[#6ED4A5]'>Media</h2>
                </div>
                <p className='relative z-10 my-[2vh] text-[1.5vh] text-gray-600'>
                  {SubX}
                </p>
                <h1 className='relative z-10 text-[3vh] font-black text-slate-500 '>
                  {Media + ' ' + Type}
                </h1>
              </div>
              <div className=' relative mx-[15%] flex flex-col  items-center rounded-1/7'>
                <p className='absolute z-0 text-[15vh] font-black text-[#6ED4A5] opacity-[.2]'>
                  Md
                </p>
                <div>
                  <h2 className='relative z-10 text-[#6ED4A5]'>Mediana</h2>
                </div>
                <p className='relative z-10 my-[2vh] text-[1.5vh] text-gray-600'>
                  {SubMd}
                </p>
                <h1 className='relative z-10 text-[3vh] font-black text-slate-500 '>
                  {Mediana + ' ' + Type}
                </h1>
              </div>
            </div>
            <div className='relative flex flex-col items-center rounded-1/7'>
              <p className='absolute z-0 text-[15vh] font-black text-[#6ED4A5] opacity-[.2]'>
                Mo
              </p>
              <div>
                <h2 className='relative z-10 text-[#6ED4A5]'>Moda</h2>
              </div>
              <p className='relative z-10 my-[2vh] text-[1.5vh] text-gray-600'>
                {SubMo}
              </p>
              <h1 className='relative z-10 text-[3vh] font-black text-slate-500 '>
                {Moda + ' ' + Type}
              </h1>
            </div>
          </>
        )}
      </div>
    </button>
  );
};

export const GraphDays = () => {
  const series = [
    {
      name: 'Citas',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 34]
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: ['#6ED4A5'],
    grid: {
      row: {
        colors: ['#6ED4A5', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.1
      }
    },
    xaxis: {
      categories: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
    }
  };

  return (
    <div className='w-[26vw]'>
      <div className='flex items-center justify-start'>
        <EspecieSelect />
      </div>
      <Chart series={series} options={options} type='line' />
    </div>
  );
};
export const TotalDatesGraph = () => {
  const series = [
    {
      name: 'citas',
      data: [28, 16, 21, 13, 30]
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },

    grid: {
      row: {
        colors: ['#6ED4A5', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.1
      }
    },
    colors: ['#6ED4A5'],
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Conejos', 'Perros', 'Gatos', 'Hurones', 'Mini Pigs'],
      tickPlacement: 'on'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      }
    }
  };
  return (
    <div className='w-[30vw] '>
      <Chart series={series} options={options} type='bar' />
    </div>
  );
};
export const GraphUsuDate = () => {
  const series = [
    {
      data: [2311, 2214, 1090]
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
        borderRadius: 10 // Ajusta el valor para obtener bordes más o menos redondeados
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ['#6ED4A5', '#5CCBA0', '#4AB291'],
    xaxis: {
      categories: [['Alimento'], ['Higiene'], ['Accesorios']],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  };
  return (
    <div className='w-[30vw]'>
      <Chart series={series} options={options} type='bar' />
    </div>
  );
};
export const GraphEspecies = () => {
  const [data, setData] = useState([]);

  const especies = useMainStore((state) => state.especies);

  const fetchAllMascotasRazaAndEspecie = useCallback(async () => {
    const allMascotas = await getAllMascotas();
    const allRazas = await getAllRazas();
    const dataD = new Array(especies.length).fill(0);
    for (let i = 0; i < especies.length; i++) {
      const especie = especies[i];
      for (let j = 0; j < allMascotas.mascota.length; j++) {
        const mascota = allMascotas.mascota[j];
        const raza = allRazas.raza.find(
          (raza) => raza.id_raz === mascota.id_raz
        );
        if (raza.id_esp === especie.id_esp) {
          dataD[i]++;
        }
      }
    }
    setData(dataD);
  }, [especies]);

  useEffect(() => {
    fetchAllMascotasRazaAndEspecie();
  }, []);
  const series = data;
  const labels = useMemo(() => {
    const labels = [];
    for (const especie of especies) {
      labels.push(especie.nombre_esp);
    }
    return labels;
  }, [especies]);
  const options = {
    chart: {
      width: 380,
      type: 'pie'
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    colors: ['#6ED4A5', '#5CCBA0', '#4AB991', '#3AA972', '#2A9B73']
  };
  return (
    <div className='w-[25vw]'>
      <Chart type='pie' series={series} options={options} />
    </div>
  );
};
export const GraphColors = () => {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  const especies = useMainStore((state) => state.especies);
  const colorsS = useMainStore((state) => state.colors);
  const fetchColors = useCallback(async () => {
    // color de las mascotas por especie
    const allMascotas = await getAllMascotas();

    setColors(colorsS);
    const dataD = new Array(colorsS.length).fill(0);

    for (let i = 0; i < colorsS.length; i++) {
      const color = colorsS[i];
      for (let j = 0; j < allMascotas.mascota.length; j++) {
        const mascota = allMascotas.mascota[j];
        if (mascota.id_col === color.id_col) {
          dataD[i]++;
        }
      }
    }

    console.log({ dataD });
    setData(dataD);
  }, []);

  useEffect(() => {
    fetchColors();
  }, [especies]);

  const series = useMemo(() => {
    const series = [];
    for (let i = 0; i < data.length; i++) {
      const isColor = data[i];
      if (!isColor) continue;

      series.push(isColor);
    }
    return series;
  }, [data]);

  const labels = useMemo(() => {
    const labels = [];
    for (let i = 0; i < colors.length; i++) {
      const isColor = data[i];
      if (!isColor) continue;
      const color = colors[i];

      labels.push(color.nombre_col);
    }
    return labels;
  }, [colors, data]);

  const options = {
    chart: {
      width: 380,
      type: 'polarArea'
    },
    labels,
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'top'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#78CC9F',
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  };

  return (
    <div className='w-[23vw]'>
      <div className='flex items-center justify-start'></div>
      <Chart options={options} series={series} type='polarArea' />
    </div>
  );
};
export const GraphVacunacion = () => {
  const series = [76, 42, 88, 17, 61];
  const options = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total'
          }
        }
      }
    },
    labels: ['Perros', 'Gatos', 'Hurones', 'Conejos', 'Mini Pigs'],
    colors: ['#3FA168', '#6AB94E', '#8BC133', '#6FFF50', '#93FF90']
  };

  return (
    <div className='w-[25vw]'>
      <Chart type='radialBar' series={series} options={options} />
    </div>
  );
};

export const GraphEnfermedades = () => {
  const series = [42, 47, 52, 58, 65];

  const options = {
    chart: {
      width: 380,
      type: 'donut'
    },
    labels: ['Perros', 'Gatos', 'Conejos', 'Hurones', 'Mini Pigs'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'top'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#78CC9F',
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  };

  return (
    <div className='w-[23vw]'>
      <Chart options={options} series={series} type='donut' />
    </div>
  );
};

export const GraphMarcasPop = () => {
  const series = [
    {
      data: [1701, 1214, 1090, 891, 987]
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ['#78CC9F', '#64C894', '#51C289', '#3DBA7E', '#29B472'],
    xaxis: {
      categories: [
        ['Pedigree'],
        ['Royal Canin'],
        ['Purina'],
        ['Top Choice'],
        ['Eukanuba']
      ],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  };
  return (
    <div className='w-[25vw]'>
      <div className='flex items-center justify-start'>
        <EspecieSelect />
      </div>
      <Chart series={series} options={options} type='bar' />
    </div>
  );
};

export const SwitchButton = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const options = ['Perros', 'Gatos', 'Hurones', 'Conejos', 'Mini Pigs'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className='relative inline-block w-64 text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className=' inline-flex h-[4vh]  w-[8vw] w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-green hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-haspopup='true'
            aria-expanded={isExpanded}
          >
            {selectedOption && selectedOption !== ''
              ? selectedOption
              : 'Especie sasadas'}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L10 14.4142L5.70711 18.7071C5.31658 19.0976 4.68342 19.0976 4.29289 18.7071C3.90237 18.3166 3.90237 17.6834 4.29289 17.2929L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L9.70711 13.2929Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>
      {isExpanded && (
        <div className='absolute z-10 mt-2 h-[22vh] w-[10vw] rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {options.map((option) => (
              <a
                key={option}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const SwitchPeriodo = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const options = ['Diario', 'Semanal', 'Mensual'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className='relative inline-block w-64 text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className=' inline-flex h-[4vh]  w-[8vw] w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-green hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-haspopup='true'
            aria-expanded={isExpanded}
          >
            {selectedOption ? selectedOption : 'Periodo'}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L10 14.4142L5.70711 18.7071C5.31658 19.0976 4.68342 19.0976 4.29289 18.7071C3.90237 18.3166 3.90237 17.6834 4.29289 17.2929L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L9.70711 13.2929Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>
      {isExpanded && (
        <div className='absolute z-10 mt-2 h-[14vh] w-[6vw] rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {options.map((option) => (
              <a
                key={option}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
