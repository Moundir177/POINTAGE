import React, { useState } from 'react';
import type { Employe } from './types';
import { XCircle } from 'lucide-react';

interface AddEmployeeFormProps {
  onAddEmploye: (employe: Employe) => void;
  departements: string[];
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onAddEmploye, departements }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [departement, setDepartement] = useState(departements[0] || '');
  const [poste, setPoste] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [dateEmbauche, setDateEmbauche] = useState('');
  const [competences, setCompetences] = useState<string[]>([]);
  const [competenceInput, setCompetenceInput] = useState('');

    const handleCompetenceAdd = () => {
    if (competenceInput.trim() !== '' && !competences.includes(competenceInput.trim())) {
      setCompetences([...competences, competenceInput.trim()]);
      setCompetenceInput('');
    }
  };

  const handleCompetenceRemove = (competence: string) => {
    setCompetences(competences.filter(c => c !== competence));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmploye: Employe = {
      id: Date.now().toString(),
      nom,
      prenom,
      departement,
      poste,
      email,
      telephone,
      dateEmbauche: new Date(dateEmbauche),
      statut: 'actif',
      competences,
      horaires: { debut: '09:00', fin: '17:30', pauseDejeuner: true }
    };

    onAddEmploye(newEmploye);
    setNom('');
    setPrenom('');
    setDepartement(departements[0] || '');
    setPoste('');
    setEmail('');
    setTelephone('');
    setDateEmbauche('');
    setCompetences([]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add Employee</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="departement" className="block text-sm font-medium text-gray-700">Department</label>
          <select
            id="departement"
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {departements.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="poste" className="block text-sm font-medium text-gray-700">Position</label>
          <input
            type="text"
            id="poste"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="dateEmbauche" className="block text-sm font-medium text-gray-700">Hire Date</label>
          <input
            type="date"
            id="dateEmbauche"
            value={dateEmbauche}
            onChange={(e) => setDateEmbauche(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="competences" className="block text-sm font-medium text-gray-700">Skills</label>
          <div className="flex items-center mt-1">
            <input
              type="text"
              id="competences"
              value={competenceInput}
              onChange={(e) => setCompetenceInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCompetenceAdd()}
              className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={handleCompetenceAdd}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {competences.map(competence => (
              <span key={competence} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                {competence}
                <button
                  type="button"
                  onClick={() => handleCompetenceRemove(competence)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
