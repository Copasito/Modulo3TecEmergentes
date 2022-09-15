pragma solidity ^0.5.0;

contract ContratoAsistenciaMatriculas  {
    struct Estudiante {
      string name;
      uint cedula;
      uint fecha;
   }
    
    string public curso;
    uint public fecha;
    uint public len;

    Estudiante[50] listado;//no se pueden sacar mas de 50 certificados por curso
    //mapping(address => Estudiante) Certificados;

    constructor(string memory nombreCurso, uint fechaCurso) public {
        curso = nombreCurso;
        fecha = fechaCurso;
        len = 0;
        //Estudiante[50] listado=[];
    }

    function emitirCertificado(string memory nombre, uint fechaParticipacion, uint cedulaEstudiante) public {
        assert(fechaParticipacion>=fecha);//verifica que la fecha de participacion sea posterior al inicio del curso
        Estudiante memory miEstudiante = Estudiante(nombre, cedulaEstudiante, fechaParticipacion);
        listado[len] = miEstudiante;
        len++;
    }

    function cosultarCertificado(uint cedulaEstudiante) public  view returns (bool) {
        uint j=0;
        bool ans = false;
        while (j < len) {
         if (listado[j].cedula==cedulaEstudiante){
             ans = true;
         }
         j++;
        }
        return ans;
    }   
}