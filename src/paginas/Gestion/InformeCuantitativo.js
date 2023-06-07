
const InformeCuantitativo =() =>{
    return (
        <div className='grid h-screen place-items-center bg-white font-sans overflow-y-scroll'>
            <div className='w-full max-w-5xl'>
                <div class=" w-full max-w-5xl py-2 mt-20 rounded bg-gray-500 text-white">
                    <div className='text-center text-xl'>
                        <p >FORMULARIO DE INFORMES</p>
                    </div>
                </div>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="flex flex-wrap -mx-3 mb-6 ">
                        <div class="w-full pr-1 mb-6 md:mb-0 md:flex md:items-center md:w-1/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Id_Informe
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value=""></input>
                        </div>
                        <div class="w-full pl-3 mb-6 md:mb-0 md:flex md:items-center md:w-2/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="cuestionario">
                                Nombre Informe
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" value=""></input>
                        </div>
                    </div>
                    <p className="text-gray-500">Cuestionarios Referenciados</p>
                    <div class="flex flex-wrap -mx-3 mb-6 ">
                        <div class="w-full pr-1 mb-6 md:mb-0 md:flex md:items-center md:w-2/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-1" for="inline-full-name">
                                Cuestionario #1
                            </label>
                            <div class="static">
                                <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                                    <option>No evalua</option>
                                    <option>Asistencia, Capacitacion y Formacion Docentes 2022-2</option>
                                    <option>Asistencia y formacion especial 2021</option>
                                    <option>Auto evaluacion especial</option>
                                    <option>Evaluacion a docentes por estudiantes</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full pl-3 mb-6 md:mb-0 md:flex md:items-center md:w-1/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="cuestionario">
                                Fecha Inicio
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-28 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" value=""></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6 ">
                        <div class="w-full pr-1 mb-6 md:mb-0 md:flex md:items-center md:w-2/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-1" for="inline-full-name">
                                Cuestionario #2
                            </label>
                            <div class="static">
                                <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                                    <option>No evalua</option>
                                    <option>Asistencia, Capacitacion y Formacion Docentes 2022-2</option>
                                    <option>Asistencia y formacion especial 2021</option>
                                    <option>Auto evaluacion especial</option>
                                    <option>Evaluacion a docentes por estudiantes</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full pl-3 mb-6 md:mb-0 md:flex md:items-center md:w-1/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="cuestionario">
                                Fecha Inicio
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-28 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" value=""></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6 ">
                        <div class="w-full pr-1 mb-6 md:mb-0 md:flex md:items-center md:w-2/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-1" for="inline-full-name">
                                Cuestionario #3
                            </label>
                            <div class="static">
                                <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                                    <option>No evalua</option>
                                    <option>Asistencia, Capacitacion y Formacion Docentes 2022-2</option>
                                    <option>Asistencia y formacion especial 2021</option>
                                    <option>Auto evaluacion especial</option>
                                    <option>Evaluacion a docentes por estudiantes</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full pl-3 mb-6 md:mb-0 md:flex md:items-center md:w-1/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="cuestionario">
                                Fecha Inicio
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-28 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" value=""></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6 ">
                        <div class="w-full pr-1 mb-6 md:mb-0 md:flex md:items-center md:w-2/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-1" for="inline-full-name">
                                Cuestionario #4
                            </label>
                            <div class="static">
                                <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                                    <option>No evalua</option>
                                    <option>Asistencia, Capacitacion y Formacion Docentes 2022-2</option>
                                    <option>Asistencia y formacion especial 2021</option>
                                    <option>Auto evaluacion especial</option>
                                    <option>Evaluacion a docentes por estudiantes</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full pl-3 mb-6 md:mb-0 md:flex md:items-center md:w-1/3">
                            <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="cuestionario">
                                Fecha Inicio
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-28 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" value=""></input>
                        </div>
                    </div>
            
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                        <label class="block text-gray-500 mb-1 md:mb-0" for="evaluador">
                            Evaluador
                        </label>
                        <div class="static">
                            <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                            <option>ADMON</option>
                            <option>Consulta</option>
                            <option>Conculta_Formacion</option>
                            <option>Decano</option>
                            <option>Docentes</option>
                            <option>Docente_Formacion</option>
                            <option>Estudiantes</option>
                            <option>Rector</option>
                            </select>
                        </div>
                        </div>
                        <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                        <label class="block text-gray-500 mb-1 md:mb-0" for="evaluaron">
                            Evaluaron
                        </label>
                        <div class="static">
                            <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluaron" type="text" placeholder="">
                            <option>ADMON</option>
                            <option>Consulta</option>
                            <option>Conculta_Formacion</option>
                            <option>Decano</option>
                            <option>Docentes</option>
                            <option>Docente_Formacion</option>
                            <option>Estudiantes</option>
                            <option>Rector</option>
                            </select>
                        </div>
                        </div>
                        <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                        <label class="block text-gray-500 mb-1 md:mb-0" for="porcentaje">
                            Porcentaje
                        </label>
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="porcentaje" type="text" placeholder=""></input>
                        </div>
                        <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                        <label class="block text-gray-500 mb-1 md:mb-0" for="estado">
                            Estado
                        </label>
                        <div class="static">
                            <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="estado" type="text" placeholder="">
                            <option>Activo</option>
                            <option>Inactivo</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'>
                            Agregar
                        </button>
                        </div>
                        <img src='img/eliminar.png' title='eliminar' id='eliminar' name='eliminar' alt='eliminar'></img>
                    </div>
                </form>
            
                <form class="flex items-center">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="static w-full">
                        <div class="static inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-base font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>
    
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <table>
                        <caption class="caption-bottom">
                        Total de Registros
                        </caption>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Listado de Categorias</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>ASISTENCA, FORMACION Y CAPACITACION DOCENTE 2022-2</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>ASISTENCA, FORMACION Y CAPACITACION DOCENTE 2022-2</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>ASISTENCA, FORMACION Y CAPACITACION DOCENTE 2022-2</td>
                            <td>Activo</td>
                        </tr>
                        </tbody>
                    </table>
                </form>
          </div>
        </div>
        
    
      )
}
export default InformeCuantitativo