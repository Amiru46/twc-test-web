import React from 'react';

const Contacts = () => {
  const contacts = [
    { fullName: 'Dion Fernando', gender: 'Male', email: 'dion342@gmail.com', phoneNumber: '0776342513' },
    { fullName: 'Senoli Edirisinghe', gender: 'Female', email: 'ediri.senli@gmail.com', phoneNumber: '0715483254' },
    { fullName: 'Kenath De Silva', gender: 'Male', email: 'kenath1996@gmail.com', phoneNumber: '0768978124' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Full Name</th>
            <th className="py-2 px-4 border">Gender</th>
            <th className="py-2 px-4 border">E-mail</th>
            <th className="py-2 px-4 border">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{contact.fullName}</td>
              <td className="py-2 px-4 border">{contact.gender}</td>
              <td className="py-2 px-4 border">{contact.email}</td>
              <td className="py-2 px-4 border">{contact.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;