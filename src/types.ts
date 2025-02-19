export interface Employe {
  id: string;
  nom: string;
  prenom: string;
  departement: string;
  poste: string;
  photo?: string;
  email: string;
  dateEmbauche: Date;
  telephone?: string;
  statut: 'actif' | 'congé' | 'mission' | 'formation' | 'maladie';
  competences: string[];
  notes?: string;
  certifications?: string[];
  vehiculeService?: boolean;
  zoneIntervention?: string[];
  horaires?: {
    debut: string;
    fin: string;
    pauseDejeuner: boolean;
  };
}

export interface Pointage {
  id: string;
  employeId: string;
  dateEntree: Date;
  dateSortie: Date | null;
  type: 'entrée' | 'sortie';
  commentaire?: string;
  localisation?: string;
  typeJournee: 'normal' | 'télétravail' | 'déplacement' | 'formation' | 'astreinte';
  heuresPrevues?: number;
  kilometrage?: number;
  interventions?: Intervention[];
  pauseDejeuner?: {
    debut: Date;
    fin: Date;
  };
}

export interface Intervention {
  id: string;
  client: string;
  adresse: string;
  type: 'maintenance' | 'depannage' | 'installation';
  description: string;
  dureeEstimee: number;
  priorite: 'basse' | 'normale' | 'haute' | 'urgente';
  status: 'planifiee' | 'en-cours' | 'terminee' | 'reportee';
  materielUtilise?: string[];
}

export interface Departement {
  id: string;
  nom: string;
  responsable: string;
  description: string;
  objectifs: string[];
  effectifCible: number;
  budget?: {
    formation: number;
    equipement: number;
    vehicules: number;
  };
  equipements?: {
    vehicules: number;
    ordinateurs: number;
    telephones: number;
    outillages: number;
  };
  zonesIntervention?: string[];
  astreintes?: boolean;
}

export interface Statistiques {
  tauxPresence: number;
  heuresTravaillees: number;
  retards: number;
  depassements: number;
  interventions: {
    total: number;
    maintenance: number;
    depannage: number;
    installation: number;
  };
  kilometrage: number;
  tauxSatisfactionClient?: number;
  delaiMoyenIntervention?: number;
}
