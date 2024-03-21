const Education = () => {
  return (
    <div className='m-12'>
            <h1 className='text-2xl font-semibold font-mono'>Education</h1>
            <div className='h-1 w-36 bg-orange-500 ml-2'></div>
            <h1 className='text-xl font-medium font-mono mt-6 underline'>Matriculation</h1>
            <table class="  text-sm text-left text-gray-500 mt-4 ml-4 rounded-lg">
        <thead class="text-xs text-gray-400 uppercase bg-gray-900">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Institution
                </th>
                <th scope="col" class="px-6 py-3">
                    Board
                </th>
                <th scope="col" class="px-6 py-3">
                    Year
                </th>
                <th scope="col" class="px-6 py-3">
                    Percentage
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-100 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    BNS DAV Public School
                </th>
                <td class="px-6 py-4">
                    CBSE
                </td>
                <td class="px-6 py-4">
                    2019
                </td>
                <td class="px-6 py-4">
                    94%
                </td>
            </tr>
        </tbody>
    </table>
            <h1 className='text-xl font-medium font-mono mt-6 underline'>Intermediate</h1>
            <table class="  text-sm text-left text-gray-500 mt-4 ml-4 rounded-lg">
        <thead class="text-xs text-gray-400 uppercase bg-gray-900">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Institution
                </th>
                <th scope="col" class="px-6 py-3">
                    Board
                </th>
                <th scope="col" class="px-6 py-3">
                    Year
                </th>
                <th scope="col" class="px-6 py-3">
                    Percentage
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-100 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    BNS DAV Public School
                </th>
                <td class="px-6 py-4">
                    CBSE
                </td>
                <td class="px-6 py-4">
                    2021
                </td>
                <td class="px-6 py-4">
                    93%
                </td>
            </tr>
        </tbody>
    </table>
            <h1 className='text-xl font-medium font-mono mt-6 underline'>Graduation</h1>
            <table class="  text-sm text-left text-gray-500 mt-4 ml-4 rounded-lg">
        <thead class="text-xs text-gray-400 uppercase bg-gray-900">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Institution
                </th>
                <th scope="col" class="px-6 py-3">
                    Branch
                </th>
                <th scope="col" class="px-6 py-3">
                    Year
                </th>
                <th scope="col" class="px-6 py-3">
                    CGPA
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-100 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    BIT Sindri,Dhanbad
                </th>
                <td class="px-6 py-4">
                    Computer Science and Engineering
                </td>
                <td class="px-6 py-4">
                    2022-26
                </td>
                <td class="px-6 py-4">
                    8.2*
                </td>
            </tr>
        </tbody>
    </table>
          </div>
  )
}

export default Education