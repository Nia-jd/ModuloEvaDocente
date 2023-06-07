import React from 'react'

const Evaluaron = () => {
  return (
    <div class="flex space-x-10 items-center justify-center h-screen ">

        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Evaluador  
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block width: 60% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Seleccione al Evaluador</option>
          <option value="estudiantes">Estudiantes</option>
          <option value="decano">Decano</option>
          <option value="docentes">Docentes</option>
          <option value="admon">Admon</option>
          <option value="rector">Rector</option>
          <option value="consulta">Consulta</option>
          <option value="consulta_formacion">Consulta_Formacion</option>
          <option value="docente_formacion">Docente_Formacion</option>
        </select>
        </label>
      
     <br/> 
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Evaluado
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block width: 50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Seleccione al Evaluado</option>
        <option value="estudiantes">Estudiantes</option>
        <option value="decano">Decano</option>
        <option value="docentes">Docentes</option>
        <option value="admon">Admon</option>
        <option value="rector">Rector</option>
        <option value="consulta">Consulta</option>
        <option value="consulta_formacion">Consulta_Formacion</option>
        <option value="docente_formacion">Docente_Formacion</option>
      </select>
      </label>
      <br/>
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Periodo
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block width: 50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Selecione el Periodo</option>
        <option value="periodo_2">2023-2</option>
        <option value="periodo_1">2023-1</option>
      </select>
      </label>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        Buscar Examen
      </button>
    </div>
  )
}

export default Evaluaron