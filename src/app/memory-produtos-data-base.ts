import { Instrumento } from './model/instrumento';

export const MemoryProdutosDataBase:Instrumento[] =[
    {id: 1, nome:'guitarra', marca:{nome:'guibson'},ano:'2012',modelo:'les paul',tipo:{tipo:'corda'},linha:'10',preco:1000.00,pathImage:'./assets/guitarra1.jpeg',descricao:'Modelo de refêrencia de diversos guitarrista, este modelo é uma réplica do modelo favorito usado pelo Slash',quantidade:3},
    {id: 2, nome:'saxofone', marca:{nome:'calvin'},ano:'2012',modelo:'ragnarok',tipo:{tipo:'sopro'},linha:'10',preco:1000.00,pathImage:'./assets/saxofone1.jpeg',descricao:'Modelo semelhante ao saxofone do Kenny J',quantidade:5},
    {id: 3, nome:'sanfona', marca:{nome:'britania'},ano:'2012',modelo:'xororo',tipo:{tipo:'teclado'},linha:'10',preco:1000.00,pathImage:'./assets/safona1.jpg',descricao:'Safona foi utilizada pelo xororó em sua primeira turne Goiana',quantidade:1}
]

