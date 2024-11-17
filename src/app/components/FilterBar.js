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
        <label>Saison: </label>
        <select name="saison" onChange={handleFilter} value={filters.saison}>
            <option value="">Tout</option>
            <option value="été">Été</option>
            <option value="printemps">Printemps</option>
            <option value="automne">Automne</option>
            <option value="hiver">Hiver</option>
        </select>
      </div>
      <div>
        <label>Prix: </label>
        <input
            type="number"
            name="prixMin"
            placeholder="Min"
            onChange={handleFilter}
            value={filters.prixMin}
        />
        <input
            type="number"
            name="prixMax"
            placeholder="Max"
            onChange={handleFilter}
            value={filters.prixMax}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
            type="number"
            name="ageMin"
            placeholder="Min"
            onChange={handleFilter}
            value={filters.ageMin}
        />
        <input
            type="number"
            name="ageMax"
            placeholder="Max"
            onChange={handleFilter}
            value={filters.ageMax}
        />
      </div>
      <div>
        <label>Niveau: </label>
        <select name="niveau" onChange={handleFilter} value={filters.niveau}>
          <option value="">Tout</option>
          <option value="pro">Pro</option>
          <option value="moyen">Moyen</option>
            <option value="novice">novice</option>
        </select>
      </div>
      <div>
        <label>Compte: </label>
        <select name="compte" onChange={handleFilter} value={filters.compte}>
          <option value="">Tout</option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
      </div>
      <div>
        <label>Passe: </label>
        <select name="passe" onChange={handleFilter} value={filters.passe}>
          <option value="">Tout</option>
          <option value="double">Double</option>
          <option value="illimité">Illimité</option>
          <option value="simple">Simple</option>
        </select>
      </div>
      <button onClick={applyFilters}>Appliquer</button>
    </div>
  );
}
