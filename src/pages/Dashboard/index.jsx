/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react';
import { RxTriangleDown } from 'react-icons/rx';
import { HiOutlineFilter } from 'react-icons/hi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Graph,
  ListThings,
  DataEstadistic,
  TotalDatesGraph,
  GraphDays,
  GraphEspecies,
  GraphUsuDate,
  GraphMarcasPop,
  GraphVacunacion,
  GraphEnfermedades,
  GraphColors
} from './components/components';
import { useMainStore } from './store/index.js';
import {
  getAllColor,
  getAllEspecies,
  getAllVets
} from '../../services/Dashboard/index.js';

const MODES = {
  Citas: 'Citas',
  Animales: 'Animales',
  Productos: 'Productos',
  Salud: 'Salud'
};

const DatesDash = () => {
  const [Mode, setMode] = useState(true);

  const [selectedMode, setSelectedMode] = useState();

  const [veterinarias, setVeterinarias] = useState([]);

  const veterinariaSelected = useMainStore((state) => state.veterinaria);
  const setVeterinariaSelected = useMainStore((state) => state.setVeterinaria);

  const setEspecies = useMainStore((state) => state.setEspecies);

  const setColors = useMainStore((state) => state.setColors);
  const colorsS = useMainStore((state) => state.colors);

  useEffect(() => {
    async function fetchAllSpecies() {
      const data = await getAllEspecies();
      console.log({ data });
      if (data) {
        setEspecies(data.especie);
      }
    }
    async function fetchAllVets() {
      const vets = await getAllVets();
      if (!vets) {
        setVeterinariaSelected({});
        return setVeterinarias([]);
      }
      setVeterinarias(vets.veterinaria);
      console.log({ vets });
    }
    async function fetchAllColors() {
      const colors = await getAllColor();
      if (colors) {
        setColors(colors.color);
        console.log({ colors });
      }
    }
    fetchAllVets();
    fetchAllSpecies();
    fetchAllColors();
  }, []);

  useEffect(() => {
    switch (selectedMode) {
      case MODES.Citas:
        setRows({
          row1: [true, true],
          row2: [false, false],
          row3: [false, false],
          row4: [false, false]
        });
        break;
      case MODES.Animales:
        setRows({
          row1: [false, false],
          row2: [false, true],
          row3: [true, false],
          row4: [false, false]
        });
        break;
      case MODES.Productos:
        setRows({
          row1: [false, false],
          row2: [true, false],
          row3: [false, false],
          row4: [false, true]
        });
        break;

      case MODES.Salud:
        setRows({
          row1: [false, false],
          row2: [false, false],
          row3: [false, true],
          row4: [true, false]
        });
        break;

      case undefined:
        setRows({
          row1: [true, true],
          row2: [true, true],
          row3: [true, true],
          row4: [true, true]
        });
        break;
    }
  }, [selectedMode]);

  const [rows, setRows] = useState({
    row1: [true, true],
    row2: [true, true],
    row3: [true, true],
    row4: [true, true]
  });

  const [Graph1, setGraph1] = useState(false);
  const [Graph3, setGraph3] = useState(false);
  const [Graph4, setGraph4] = useState(false);
  const [Graph5, setGraph5] = useState(false);
  const [Graph6, setGraph6] = useState(false);
  const [Graph7, setGraph7] = useState(false);
  const [Graph8, setGraph8] = useState(false);
  const [VetSelect, setVetSelect] = useState(false);
  const [FilSelect, setFilSelect] = useState(false);
  return (
    <>
      {Mode ? (
        <div className='flex h-screen w-screen'>
          <div className='flex h-full w-full items-center'>
            <div className='h-6/7 w-full'>
              <div className='h-1/14 flex w-[100%]'>
                <button className='ml-[4%] flex h-[7vh] w-[4%] items-center justify-center rounded-[2vw] border-[.5vh] border-green text-[3vh] text-[#757474] outline-none'>
                  <div className='flex h-[70%] w-[60%] items-center justify-center rounded-[50%] bg-green text-[3vh]'>
                    <AiOutlineArrowLeft />{' '}
                    {/* Poner aquí el URL para el regreso */}
                  </div>
                </button>
                <div className='flex w-[83%] items-center justify-center text-3xl font-semibold text-green'>
                  DashBoard
                </div>
              </div>
              <div className='h-1/14 my-[1vh] flex items-center justify-center text-3xl font-semibold text-green'>
                <div className='relative flex h-[100%] w-[50%] items-center'>
                  <button
                    className='mx-[12vw] flex h-[7vh] w-[20vh] items-center justify-center rounded-[1vw] border-[.5vh] border-green text-[3vh] outline-none '
                    onClick={() => {
                      VetSelect ? setVetSelect(false) : setVetSelect(true);
                    }}
                  >
                    <p className='mx-3 text-[2vh] text-[#757474]'>
                      {veterinariaSelected && veterinariaSelected.nombre_vet
                        ? veterinariaSelected.nombre_vet
                        : 'Veterinaria'}
                    </p>
                    <RxTriangleDown />
                  </button>
                  <div
                    className={
                      VetSelect
                        ? 'absolute top-[11vh] mx-[12vw] flex h-auto w-[20vh] flex-col items-center justify-center'
                        : 'absolute h-0 w-0 opacity-0'
                    }
                  >
                    {veterinarias.map((vet) => (
                      <button
                        key={vet.id_vet}
                        className='z-50 float-left my-[.5vh] flex h-[6vh] w-full items-center justify-center rounded-[1vw] border-[.5vh] border-green bg-white text-[2vh] text-[#757474]'
                        onClick={() => {
                          setVetSelect(false);
                          setVeterinariaSelected(vet);
                        }}
                      >
                        {vet.nombre_vet}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='relative flex h-[100%] w-[50%] items-center justify-end'>
                  <button
                    className='mx-[12vw] flex h-[7vh] w-[18vh] items-center justify-center rounded-[2vw] border-[.5vh] border-green text-[3vh] text-[#757474] outline-none'
                    onClick={() => {
                      FilSelect ? setFilSelect(false) : setFilSelect(true);
                      setSelectedMode(undefined);
                    }}
                  >
                    <div className='flex h-[70%] w-[25%] items-center justify-center rounded-[50%] bg-green text-[3vh]'>
                      <HiOutlineFilter />
                    </div>
                    {selectedMode || (
                      <p className='mx-5 text-[2vh] text-[#757474]'>Filtrar</p>
                    )}
                  </button>
                  <div
                    className={
                      FilSelect
                        ? 'absolute top-[12vh] z-50 mx-[12vw] flex h-auto w-[18vh] flex-col items-center justify-center rounded-[2vw] border-[.5vh] border-green bg-white p-[1vh]'
                        : ' absolute bottom-0 left-0 right-0 top-0 h-0 w-0 opacity-0'
                    }
                  >
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-green p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Citas);
                      }}
                    >
                      Citas
                    </button>
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-green p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Animales);
                      }}
                    >
                      Animales
                    </button>
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-green p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Productos);
                      }}
                    >
                      Productos
                    </button>
                    <button
                      className='my-[.5vh] w-[70%] rounded-[2vw] border-[.5vh] border-green p-[.5vh] text-[1.5vh] text-[#757474]'
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Salud);
                      }}
                    >
                      Salud
                    </button>
                  </div>
                </div>
              </div>
              <div className='grid h-[85%] w-full grid-cols-2 overflow-y-scroll bg-[#fff] '>
                {rows.row1[0] ? (
                  Graph1 ? (
                    <DataEstadistic
                      Type='Citas'
                      SubX='Media de citas por dia'
                      Media={129}
                      SubMd='Mediana de citas por dia'
                      Mediana={1234}
                      SubMo='Moda de citas por dia'
                      Moda={2344}
                      click={() => {
                        setGraph1(false);
                      }}
                    />
                  ) : (
                    <Graph
                      Name='Cantidad de citas por dia del mes'
                      Graph={<GraphDays />}
                      click={() => {
                        setGraph1(true);
                      }}
                      data
                    />
                  )
                ) : null}

                {rows.row1[1] ? (
                  <Graph
                    Name='Citas totales'
                    Graph={<TotalDatesGraph />}
                    data={false}
                  />
                ) : null}
                {rows.row2[0] ? (
                  Graph3 ? (
                    <DataEstadistic
                      Type='Citas'
                      SubX='Media de citas por usuario'
                      Media={129}
                      SubMd='Mediana de citas por usuario'
                      Mediana={1234}
                      SubMo='Moda de citas por usuario'
                      Moda={2344}
                      click={() => {
                        setGraph3(false);
                      }}
                    >
                      <ListThings />
                    </DataEstadistic>
                  ) : (
                    <Graph
                      Name='Productos mas usados en citas'
                      Graph={<GraphUsuDate />}
                      click={() => {
                        setGraph3(true);
                      }}
                      data={false}
                    />
                  )
                ) : null}
                {rows.row2[1] ? (
                  Graph4 ? (
                    <DataEstadistic
                      Type=''
                      SubX='Media de animales registrados'
                      Media={129}
                      SubMd='Mediana de animales registrados'
                      Mediana={1234}
                      SubMo='Moda de animales registrados'
                      Moda={2344}
                      click={() => {
                        setGraph4(false);
                      }}
                    />
                  ) : (
                    <Graph
                      Name='Cantidad de animales'
                      Graph={<GraphEspecies />}
                      click={() => {
                        setGraph4(true);
                      }}
                      data={false}
                    />
                  )
                ) : null}
                {rows.row3[0] ? (
                  Graph5 ? (
                    <DataEstadistic
                      Type='Años'
                      SubX='Media de años'
                      Media={129}
                      SubMd='Mediana de años'
                      Mediana={1234}
                      SubMo='Moda de años'
                      Moda={2344}
                      click={() => {
                        setGraph5(false);
                      }}
                    >
                      <ListThings
                        data={[
                          {
                            sectionTitle: 'Color',
                            sectionElements: colorsS
                              .slice(0, Math.floor(colorsS.length / 2))
                              .map((color) => color.nombre_col)
                          }
                        ]}
                        title='Color de las mascotas'
                      />
                    </DataEstadistic>
                  ) : (
                    <Graph
                      Name='Color de las mascotas'
                      Graph={<GraphColors />}
                      click={() => {
                        setGraph5(true);
                      }}
                      data
                    />
                  )
                ) : null}
                {rows.row3[1] ? (
                  Graph6 ? (
                    <DataEstadistic
                      Type='Vacunas'
                      SubX='Media de vacunas'
                      Media={129}
                      SubMd='Mediana de vacunas'
                      Mediana={1234}
                      SubMo='Moda de vacunas'
                      Moda={2344}
                      click={() => {
                        setGraph6(false);
                      }}
                    >
                      {/* <ListThings title='Vacunas aplicadas por especie' /> */}
                    </DataEstadistic>
                  ) : (
                    <Graph
                      Name='Vacunas aplicadas por especie'
                      Graph={<GraphVacunacion />}
                      click={() => {
                        setGraph6(true);
                      }}
                      data
                    />
                  )
                ) : null}
                {rows.row4[0] ? (
                  Graph7 ? (
                    <DataEstadistic
                      Type='Enfermedades'
                      SubX='Media de enfermedades'
                      Media={129}
                      SubMd='Mediana de enfermedades'
                      Mediana={1234}
                      SubMo='Moda de enfermedades'
                      Moda={2344}
                      click={() => {
                        setGraph7(false);
                      }}
                    >
                      {/* <ListThings /> */}
                    </DataEstadistic>
                  ) : (
                    <Graph
                      Name='Enfermades mas comúnes por especie'
                      Graph={<GraphEnfermedades />}
                      click={() => {
                        setGraph7(true);
                      }}
                      data
                    />
                  )
                ) : null}
                {rows.row4[1] ? (
                  Graph8 ? (
                    <DataEstadistic
                      Type='Mascotas'
                      SubX='Media de mascotas'
                      Media={129}
                      SubMd='Mediana de mascotas'
                      Mediana={1234}
                      SubMo='Moda de mascotas'
                      Moda={2344}
                      click={() => {
                        setGraph8(false);
                      }}
                    >
                      {/* <ListThings /> */}
                    </DataEstadistic>
                  ) : (
                    <Graph
                      Name='Marcas mas consumidas por especies'
                      Graph={<GraphMarcasPop />}
                      click={() => {
                        setGraph8(true);
                      }}
                      data
                    />
                  )
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DatesDash;
