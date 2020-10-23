const flats = [
  {
    "type": "flat",
    "id": 1,
    "attributes": {
      "title": "3-х комнатная на Минской",
      "rooms": 3,
      "address": {
        "city": "Tyumen",
        "street": "Минская",
        "house": "3a",
        "room": "123"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 2,
      "attributes": {
        "first_name": "Василий",
        "last_name": "Дроздов",
        "middle_name": "Михайлович"
      }
    }
  },
  {
    "type": "flat",
    "id": 2,
    "attributes": {
      "title": "1 комнатная на Барабаинской",
      "rooms": 2,
      "address": {
        "city": "Tyumen",
        "street": "Барабинская",
        "house": "12",
        "room": "45"
      },
      "area": 34,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 10,
      "attributes": {
        "first_name": "Михаил",
        "last_name": "Иванов",
        "middle_name": "Демидович"
      }
    }
  },
  {
    "type": "flat",
    "id": 3,
    "attributes": {
      "title": "Квартира Ленина",
      "rooms": 4,
      "address": {
        "city": "Tyumen",
        "street": "Ленина",
        "house": "134",
        "room": "24"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 44,
      "attributes": {
        "first_name": "Степан",
        "last_name": "Карачаев",
        "middle_name": "Иванович"
      }
    }
  },
  {
    "type": "flat",
    "id": 4,
    "attributes": {
      "title": "3-х комнатная на Минской",
      "rooms": 3,
      "address": {
        "city": "Tyumen",
        "street": "Минская",
        "house": "3a",
        "room": "123"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 2,
      "attributes": {
        "first_name": "Василий",
        "last_name": "Дроздов",
        "middle_name": "Михайлович"
      }
    }
  },
  {
    "type": "flat",
    "id": 5,
    "attributes": {
      "title": "1 комнатная на Барабаинской",
      "rooms": 2,
      "address": {
        "city": "Tyumen",
        "street": "Барабинская",
        "house": "12",
        "room": "45"
      },
      "area": 34,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 10,
      "attributes": {
        "first_name": "Михаил",
        "last_name": "Иванов",
        "middle_name": "Демидович"
      }
    }
  },
  {
    "type": "flat",
    "id": 6,
    "attributes": {
      "title": "Квартира Ленина",
      "rooms": 4,
      "address": {
        "city": "Tyumen",
        "street": "Ленина",
        "house": "134",
        "room": "24"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 44,
      "attributes": {
        "first_name": "Степан",
        "last_name": "Карачаев",
        "middle_name": "Иванович"
      }
    }
  },
  {
    "type": "flat",
    "id": 7,
    "attributes": {
      "title": "3-х комнатная на Минской",
      "rooms": 3,
      "address": {
        "city": "Tyumen",
        "street": "Минская",
        "house": "3a",
        "room": "123"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 2,
      "attributes": {
        "first_name": "Василий",
        "last_name": "Дроздов",
        "middle_name": "Михайлович"
      }
    }
  },
  {
    "type": "flat",
    "id": 8,
    "attributes": {
      "title": "1 комнатная на Барабаинской",
      "rooms": 2,
      "address": {
        "city": "Tyumen",
        "street": "Барабинская",
        "house": "12",
        "room": "45"
      },
      "area": 34,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 10,
      "attributes": {
        "first_name": "Михаил",
        "last_name": "Иванов",
        "middle_name": "Демидович"
      }
    }
  },
  {
    "type": "flat",
    "id": 9,
    "attributes": {
      "title": "Квартира Ленина",
      "rooms": 4,
      "address": {
        "city": "Tyumen",
        "street": "Ленина",
        "house": "134",
        "room": "24"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 44,
      "attributes": {
        "first_name": "Степан",
        "last_name": "Карачаев",
        "middle_name": "Иванович"
      }
    }
  },
  {
    "type": "flat",
    "id": 10,
    "attributes": {
      "title": "3-х комнатная на Минской",
      "rooms": 3,
      "address": {
        "city": "Tyumen",
        "street": "Минская",
        "house": "3a",
        "room": "123"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 2,
      "attributes": {
        "first_name": "Василий",
        "last_name": "Дроздов",
        "middle_name": "Михайлович"
      }
    }
  },
  {
    "type": "flat",
    "id": 11,
    "attributes": {
      "title": "1 комнатная на Барабаинской",
      "rooms": 2,
      "address": {
        "city": "Tyumen",
        "street": "Барабинская",
        "house": "12",
        "room": "45"
      },
      "area": 34,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 10,
      "attributes": {
        "first_name": "Михаил",
        "last_name": "Иванов",
        "middle_name": "Демидович"
      }
    }
  },
  {
    "type": "flat",
    "id": 12,
    "attributes": {
      "title": "Квартира Ленина",
      "rooms": 4,
      "address": {
        "city": "Tyumen",
        "street": "Ленина",
        "house": "134",
        "room": "24"
      },
      "area": 134,
      "unit": "квм"
    },
    "relationships": {
      "type": "agent",
      "id": 44,
      "attributes": {
        "first_name": "Степан",
        "last_name": "Карачаев",
        "middle_name": "Иванович"
      }
    }
  },
];

export const getFlats = () => {
  return new Promise((resolve, _reject) => {
    resolve(parseFlats(flats));
  });
};

const parseFlats = (flats) => {
  return flats.map(flat => {
    flat.address = flat.attributes.address;
    flat.title = flat.attributes.title;
    flat.area = `${flat.attributes.area} ${flat.attributes.unit}`;
    flat.rooms = flat.attributes.rooms;
    flat.agent = flat.relationships;
    flat.agent.firstName = flat.relationships.attributes.first_name;
    flat.agent.lastName = flat.relationships.attributes.last_name;
    return flat;
  });
};
