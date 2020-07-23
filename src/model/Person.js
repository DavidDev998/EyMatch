const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const { hasOne } = require('./Immovable_property');
const sequelize = new Sequelize(dbConfig);
const Immovable = sequelize.define('immovable_property');
const Movable = sequelize.define('movables');
const Profession = sequelize.define('profession');
const Civil_status  = sequelize.define('civil_status');
const Regime_of_goods = sequelize.define('regime_of_goods');
const Phone = sequelize.define('phone');
const Email = sequelize.define('email');
const Address = sequelize.define('address');
const Person_Type = sequelize.define('person_type');

const Person = sequelize.define('Person', {
  // Caracteristicas
    name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    salutation: DataTypes.STRING,
    alias: DataTypes.STRING,
    sulfix: DataTypes.STRING,
    title: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    gender: DataTypes.STRING,
    uf: DataTypes.STRING,
    mother_name: DataTypes.STRING,
    orgao_expedidor: DataTypes.STRING,
    role:DataTypes.STRING,
    income:DataTypes.REAL,
    family_income: DataTypes.REAL,
    complement_income: DataTypes.REAL,
    dependents_number: DataTypes.INTEGER,
    patrimony: DataTypes.REAL,
    scholarity:DataTypes.STRING,
    //measures
    height: DataTypes.REAL,
    weight: DataTypes.REAL,
    head_measure: DataTypes.REAL,
    neck_measure: DataTypes.REAL,
    wrist_measure: DataTypes.REAL,
    shoulders_measure: DataTypes.REAL,
    shoulder_measure: DataTypes.REAL,
    bust_measure: DataTypes.REAL,
    arm_length: DataTypes.REAL,
    arm_perimeter: DataTypes.REAL,
    waist_measure: DataTypes.REAL,
    hip_measure: DataTypes.REAL,
    smaller_front_measure: DataTypes.REAL,
    smaller_back_measure: DataTypes.REAL,
    back_width_measure: DataTypes.REAL,
    body_measure: DataTypes.REAL,
    skirt_measure: DataTypes.REAL,
    bra_size: DataTypes.STRING,
    low_bust_measure: DataTypes.REAL,
    pants_size: DataTypes.STRING,
    shirt_size: DataTypes.STRING,
    underwear_size: DataTypes.STRING,
    leg_length: DataTypes.REAL,
    thigh_perimeter: DataTypes.REAL,
    finger_size: DataTypes.INTEGER,
    skin_color: DataTypes.STRING,
    eyes_color: DataTypes.STRING,
    hair_color: DataTypes.STRING,
    shoes_number: DataTypes.INTEGER,
    deficiency: DataTypes.BOOLEAN,
    deficiency_type: DataTypes.STRING,
    score: DataTypes.REAL,
    excluded_at: DataTypes.DATE
}, {
  // Other model options go here
  tableName: 'person'
});

Person.hasMany(Immovable,{ foreignKey: 'person_id',as: 'immovables'  });
Person.hasMany(Movable,{ foreignKey: 'person_id',as: 'movables'  });
Person.belongsTo(Person_Type,{foreignKey:'person_type_id',as:'type'});
Person.belongsTo(Profession,{ foreignKey: 'profession_id',as: 'profession'  });
Person.belongsTo(Civil_status,{ foreignKey: 'civil_status_id',as: 'civil_status'  });
Person.belongsTo(Regime_of_goods,{ foreignKey: 'regime_de_bens_id',as: 'regime_of_goods'  });
Person.belongsToMany(Phone,{foreignKey:'person_id',through:'person_phones',as:'phones'});
Person.belongsToMany(Email,{foreignKey:'person_id',through:'person_emails',as:'emails'});
Person.belongsToMany(Address,{foreignKey:'person_id',through:'person_addresses',as:'addresses'});

module.exports = Person;