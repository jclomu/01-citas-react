import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 md:h-screen overflow-scroll">
        
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      
      <p className="text-center text-xl mt-5 mb-10">
        Administra tus {''}
        <span className="text-indigo-600 font-bold ">pacientes y citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      
    </div>
  )
}

export default ListadoPacientes
