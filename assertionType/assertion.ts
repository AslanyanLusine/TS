enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest'
}

function getRoleMessage(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return 'Welcome, Admin! ';
        case UserRole.User:
            return 'Hello, User! ';
        case UserRole.Guest:
            return 'Hi, Guest! ';
        default:
            return 'Role not recognized.';
    }
}

const role = 'Admin' as UserRole; 
console.log(getRoleMessage(role));
