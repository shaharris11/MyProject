const monsters = [
   {monster:"Slime"},
   {monster: "Dragon"},
   {monster: "Slime Blue Dragon"}
]

const characters = [
    {name: 'Rimuru Tempest', title: 'Demon Lord', age: '4', monsterId: 3 , placeId: 1,
     description: 'best anime', imgUrl: 'https://i.scdn.co/image/ab67616d0000b273c36330975ade41339f267614'},
     {
        name: 'Veldore', title: 'Star King Dragon', age: '5000', monsterId: 2, placeId: 1,
        description: 'best anime', imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7902ea50-b4ee-4852-bf15-a1f7788d0d17/deo7jtv-572419a9-4e42-4991-be50-33e3dfd215b2.jpg/v1/fill/w_1024,h_1683,q_75,strp/veldora_tempest_by_okumo2_deo7jtv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4MyIsInBhdGgiOiJcL2ZcLzc5MDJlYTUwLWI0ZWUtNDg1Mi1iZjE1LWExZjc3ODhkMGQxN1wvZGVvN2p0di01NzI0MTlhOS00ZTQyLTQ5OTEtYmU1MC0zM2UzZGZkMjE1YjIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jbqwQuxqh_t2u8Lrb9nh6R1H5mv3vjN-t5_Ak3_zysg', 
     }
]



const places = [
   {name: 'Great Forest of Jura', owner: 'Rimuru Tempest'},
   {name: 'Kingdom of Falmuth', owner: 'Edward Edmaris Falmuth'}
]

const comments = [
   {name: 'kira', characterId: 1, description: 'This is the best!'}
]

module.exports = {characters, monsters, places, comments}