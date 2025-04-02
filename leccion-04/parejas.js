const invitados = [
    "Ana", "Bruno", "Carlos", "Daniel", "Eduardo", 
    "Fernanda", "Gabriel", "Héctor", "Isabel", "Javier", "Karla", 
    "Luis", "Mariana", "Natalia", "Oscar", "Patricia", "Quetzal", 
    "Ricardo", "Alvaro",  "Sofía"
];

function encontrarPareja(arr) {
 
        for (let i = 0; i<invitados.length; i++)
        {
            for (let j = i+1; j<invitados.length; j++)
            {
                if (arr[i][0] == arr[j][0])
                {
                    return [arr[i], arr[j]];

                }
            }
        }
        return null; 
    }

console.log(encontrarPareja(invitados));
// Resultado: ["Ana", "Alvaro"] (la unica pareja :O)