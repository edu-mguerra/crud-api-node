duas coisas para mexer:
Servidor: software que é o banco de dados
Cliente: software que usa o servidor (usa o banco de dados )


- inserir dados
- ler dados
- alterar dados
- excluir dados

- GIT PUSH = Pegar o nosso codigo e enviar para o repositorio remoto
- GIT PULL = Pegar o repositorio remoto e trazer para o meu codigo

- PRISMA DB PUSH = pegar o schema e sicronizar com o banco de dados, faz a estrutura que crieu aqui e cria no banco de dados.
- PRISMA DB PULL = Pega o banco de dados e cria um schema pra mim

- Migrations: Basicamente, cria uma copia de tudo que fizemos no banco de dados (como se fosse um comitt) podemos reverter sitiações tambem. Ao rodar o migrate, ee automaticamnte roda o comando push / npx prisma migrate dev /rrrr
Relações entre tabelas - (chave estrangeira):


- mapping: relacionado a organização. basicamente criamos um model user aqui. mas vamos mapear para que no banco de dados o nome de users '  @@map("posts") '

- prisma client:
 - - DICA: ISOLAR TODOS OS CODIGOS QUE CONTEM PRISMA EM UMA PASTA SÓ. 'SERVICES'


- motodos de filtro:
 export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    where: {
      email: {
        // startsWith: 'j', // pega todos os nomes que começa com j
        endsWith: '@gmail.com' // pega todos com usuario que termina com @gmail.com
      }
    },
    select: {
      id: true,
      name: true,
      email: true,
    }
  })

  ex 2:where: {
      OR: [
        {
          email: {
            endsWith: '@gmail.com'
          },
          name: 'joao'
        },
        {
          email: {
            endsWith: '@hotmail.com'
          }
        }
      ]
    },


# contagem de posts por usuarios:  select: {
      id: true,
      name: true,
      email: true,
      _count: {
        select: {
          Post: true
        }
      }
    }
 - ordenando quando empata :
 export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: [
      { name: 'asc' },
 #     { id: 'asc' } // quando tem dois nomes iguais, o que vai desempatar é o ID
    ]
  })
  return users
}

- Find Or Create = ache um registro, se não existir crie ( FindOrCreate() )
