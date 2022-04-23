function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Januario', 'Admin');
usuarios.set('Junior', 'User');

console.log(getAdmins(usuarios));
