
export default function IconeEquip(equipement: string) {
  switch (equipement) {
    case "Wifi":
      return <i className="fa-solid fa-wifi"></i>;

    case "Cuisine":
    case "Cuisine équipée":
    case "Cuisine moderne":
    case "Kitchenette":
      return <i className="fa-solid fa-kitchen-set"></i>;

    case "Télévision":
    case "TV":
      return <i className="fa-solid fa-tv"></i>;

    case "Climatisation":
      return <i className="fa-solid fa-snowflake"></i>;

    case "Chauffage":
      return <i className="fa-solid fa-temperature-high"></i>;

    case "Cheminée":
    case "Poêle à bois":
    case "Barbecue":
      return <i className="fa-solid fa-fire"></i>;

    case "Machine à laver":
      return <i className="fa-solid fa-jug-detergent"></i>;

    case "Jardin":
      return <i className="fa-solid fa-tree"></i>;

    case "Eau chaude":
      return <i className="fa-solid fa-droplet"></i>;

    case "Toilettes sèches":
      return <i className="fa-solid fa-restroom"></i>;

    case "Machine à café":
      return <i className="fa-solid fa-mug-hot"></i>;

    case "Piscine":
      return <i className="fa-solid fa-person-swimming"></i>;

    case "Lave-vaisselle":
      return <i className="fa-solid fa-utensils"></i>;

    case "Sauna":
      return <i className="fa-solid fa-hot-tub-person"></i>;

    case "Ascenseur":
      return <i className="fa-solid fa-elevator"></i>;

    case "Jeux enfants":
      return <i className="fa-solid fa-child-reaching"></i>;

    case "Terrasse":
      return <i className="fa-solid fa-umbrella-beach"></i>;

    case "Electricité":
      return <i className="fa-solid fa-bolt"></i>;

    default:
      return <i className="fa-solid fa-circle-question"></i>;
  }
}