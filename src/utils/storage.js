import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os favoritos
//Salvar um favorito
//Remove um favorito da lista

export async function getFavorites(key){
    const favorite = await AsyncStorage.getItem(key)
    return JSON.parse(favorite) || []
}

export async function saveFavorites(key, newItem){
    let myFovorites = await getFavorites(key)

    let resItem = myFovorites.some(item => item.id === newItem.id)

    if(resItem){
        console.log('Item já esta salvo')
        return
    }

    myFovorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFovorites))

    console.log('salvo')

}

export async function removeItem(id){

    let receipes = await getFavorites('@appreceitas')
    let myFavorites = receipes.filter( item =>{
      return item.id !== id
    })

    await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorites))

    console.log('item deletado')

    return myFavorites


}

export async function isFavorite(receita){

    let myReceips = await getFavorites('@appreceitas')

    const favorite = myReceips.find(item => item.id === receita.id)

    if(favorite){
        return true
    }

    return false
}
