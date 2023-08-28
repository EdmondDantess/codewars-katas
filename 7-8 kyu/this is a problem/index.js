// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }
//
// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe


function NameMe(first, last) {
    this.firstName = first ? first : 'John';
    this.lastName = last ? last : 'Doe';

    return {
        name: this.firstName + ' ' + this.lastName,
        firstName: this.firstName,
        lastName: this.lastName
    };

}