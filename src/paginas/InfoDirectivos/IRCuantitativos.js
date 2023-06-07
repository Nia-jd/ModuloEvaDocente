import React from 'react'

const Cuantitativos= () => {
  return (
    <div class="flex space-x-10 items-center justify-center h-screen ">

        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Informes Activos
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-80 rounded-lg focus:ring-blue-500 focus:border-blue-500 block width:60% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Seleccione el informe</option>
                <option value="estudiantes">Estudiantes</option>
                <option value="decano">Decano</option>
            </select>
        </label>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Buscar
        </button>
    </div>
  )
}

export default Cuantitativos