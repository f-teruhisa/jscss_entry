// Object Literal
// constで定義してもプロパティは変更可能

const person = {
  name: ['Code Mafia', 'Code Mafia'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  // メソッドもプロパティに追加可能
  getFullName: function(){
    console.log(this.name[0] + this.name[1]);
  }
};

console.log(person.name);
person.getFullName();
