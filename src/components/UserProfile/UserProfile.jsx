const UserProfile = ({ user }) => {
    const fullName = `${user.firstName} ${user.lastName}`;
  
    return (
        <div>
          <h2>{fullName}</h2>
          <p>Status: {user.isActive ? 'Ativo' : 'Inativo'}</p>
          <p>Email: {user.email}</p>
        </div>
    );
  }
  