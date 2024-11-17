"use client";

import { useState } from "react";

export default function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    saison: "",
    prixMin: "",
    prixMax: "",
    ageMin: "",
    ageMax: "",
    niveau: "",
    compte: "",
    passe: ""
  });

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filterbar">
      <h3>Filtrer les données</h3>
      <div>
        <label htmlFor="saison">Saison: </label>
        <select
          id="saison"
          name="saison"
          onChange={handleFilter}
          value={filters.saison}
          aria-label="Saison selection"
        >
          <option value="">Tout</option>
          <option value="été">Été</option>
          <option value="printemps">Printemps</option>
          <option value="automne">Automne</option>
          <option value="hiver">Hiver</option>
        </select>
      </div>
      <div>
        <label htmlFor="prixMin">Prix: </label>
        <input
          type="number"
          id="prixMin"
          name="prixMin"
          placeholder="Min"
          onChange={handleFilter}
          value={filters.prixMin}
          aria-label="Minimum price"
        />
        <input
          type="number"
          id="prixMax"
          name="prixMax"
          placeholder="Max"
          onChange={handleFilter}
          value={filters.prixMax}
          aria-label="Maximum price"
        />
      </div>
      <div>
        <label htmlFor="ageMin">Age: </label>
        <input
          type="number"
          id="ageMin"
          name="ageMin"
          placeholder="Min"
          onChange={handleFilter}
          value={filters.ageMin}
          aria-label="Minimum age"
        />
        <input
          type="number"
          id="ageMax"
          name="ageMax"
          placeholder="Max"
          onChange={handleFilter}
          value={filters.ageMax}
          aria-label="Maximum age"
        />
      </div>
      <div>
        <label htmlFor="niveau">Niveau: </label>
        <select
          id="niveau"
          name="niveau"
          onChange={handleFilter}
          value={filters.niveau}
          aria-label="Niveau selection"
        >
          <option value="">Tout</option>
          <option value="pro">Pro</option>
          <option value="moyen">Moyen</option>
          <option value="novice">Novice</option>
        </select>
      </div>
      <div>
        <label htmlFor="compte">Compte: </label>
        <select
          id="compte"
          name="compte"
          onChange={handleFilter}
          value={filters.compte}
          aria-label="Compte status selection"
        >
          <option value="">Tout</option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
      </div>
      <div>
        <label htmlFor="passe">Passe: </label>
        <select
          id="passe"
          name="passe"
          onChange={handleFilter}
          value={filters.passe}
          aria-label="Passe type selection"
        >
          <option value="">Tout</option>
          <option value="double">Double</option>
          <option value="illimité">Illimité</option>
          <option value="simple">Simple</option>
        </select>
      </div>
      <button onClick={applyFilters} aria-label="Apply filters">Appliquer</button>
    </div>
  );
}
