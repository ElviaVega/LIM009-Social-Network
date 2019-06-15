import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
        post: {
            __doc__: {
                ABC4GH4f: {
                    date: '12 de junio de 2019, 20:01:22 UTC-5',
                    name: 'Gerardo Santos',
                    post: 'Me gusta viajar',
                    idUser: '1234abcd',
                    visibility: 'Todos'      
                },
                EF3nm8kO: {
                    date: '13 de junio de 2019, 20:01:22 UTC-5',
                    name: 'Luisa Zapata',
                    post: 'Viajar es un privilegio',
                    idUser: '1234opqr',
                    visibility: 'Solo Yo'    
                }
            }
        },
    
        users: {
            __doc__: {
                AO68SwmRrYPO6qjaCorCGgWFaSX2: {
                    email: 'juanperez@gmail.com',
                    id: 'AO68SwmRrYPO6qjaCorCGgWFaSX2',
                    name: 'Juan Perez',
                    photo: null
                },
                AeC4tzlg9tNq4kcugc1u7y7ThIz2: {
                    email: 'luzmila@gmail.com',
                    id: 'AeC4tzlg9tNq4kcugc1u7y7ThIz2',
                    name: "Luzmila Estrada",
                    photo: null              
                },
            
            }

        }

    }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {setPost, getPost, setUsers, userFirestore, readData, deletePost, editPost, editVisibilityPost} from '../src/controler-firebase.js'

describe('colección post', () => {
    it('Debería poder agregar un post', (done) => {
      return setPost({
        date: '14 de junio de 2019, 20:01:22 UTC-5',
        name: 'Diego Guerrero',
        post: 'Tengo tiempo para viajar!!',
        idUser: '1234nmop',
        visibility: 'Solo Yo'  
      })
        .then(() => getPost(
          (data) => {
            const result = data.find((element) => element.post === 'Tengo tiempo para viajar!!');
            expect(result.post).toBe('Tengo tiempo para viajar!!');
            done()
          }
        ))
    })
  });
  it('Debería poder eliminar un post', (done) => {
    return deletePost('EF3nm8kO')
      .then(() => getPost(
        (data) => {
        //console.log(data)
          const result = data.find((element) => element.id === 'EF3nm8kO');
         // console.log(result)
          expect(result).toBe(undefined);
          done()
        }
      ))
  });
  it('Debería poder editar un post', (done) => {
    return editPost('ABC4GH4f', 'Soy feliz viajando')
      .then(() => getPost(
        (data) => {
       // console.log(data)
          const result = data.find((element) => element.id === 'ABC4GH4f');
          //console.log(result)
          expect(result.post).toBe('Soy feliz viajando');
          done()
        }
      ))
  });
  it('Debería poder editar la visibilidad de un post', (done) => {
    return editVisibilityPost('ABC4GH4f', 'Solo Yo')
      .then(() => getPost(
        (data) => {
       // console.log(data)
          const result = data.find((element) => element.visibility === 'Solo Yo');
         // console.log(result)
          expect(result.visibility).toBe('Solo Yo');
          done()
        }
      ))
  });
  
  describe('colección de usuarios', () => {
    it('Debería agregar un usuario', (done) => {
        return setUsers('users', 'E5NDXeIZrZbOCfMKyPJPmOJ5BQG2', {
            email: 'ClaudiaRojasn@gmail.com',
            id: 'E5NDXeIZrZbOCfMKyPJPmOJ5BQG2',
            name: 'Claudia Rojas',
            photo: "https://www.rollingstone.com/wp-content/uploads/2019/03/shutterstock_10101008ss.jpg",
            
        }).then(() => {
            userFirestore('E5NDXeIZrZbOCfMKyPJPmOJ5BQG2')
                .then((doc) => {
                   // console.log(doc.data());
                    const result = doc.data().name;
                    expect(result).toBe('Claudia Rojas');
                    done();
                })
            })
        });
    })
    
  

  