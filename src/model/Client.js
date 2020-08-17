const Model = require('./Model')

class Client extends Model {
    name;
    birth_date;
    cpf;
    rg;
    gender;
    orgao_expedidor;
    role;
    income;
    family_income;
    complement_income;
    dependents_number;
    patrimony;
    scholarity;
    mother_name;
    excluded_at;
    updatedAt;
    createdAt;
    first_name;
    last_name;
    middle_name;
    salutation;
    alias;
    sulfix;
    titles
    uf;
    height;
    weight;
    head_measure;
    neck_measure;
    wrist_measure;
    shoulders_measure;
    shoulder_measure;
    bust_measure;
    arm_length;
    arm_perimeter;
    waist_measure;
    hip_measure;
    smaller_front_measure;
    smaller_back_measure;
    back_width_measure;
    body_measure;
    skirt_measure;
    bra_size;
    low_bust_measure;
    pants_size;
    shirt_size;
    underwear_size;
    leg_length;
    thigh_perimeter;
    finger_size;
    skin_color;
    eyes_color;
    hair_color;
    shoes_number;
    deficiency;
    deficiency_type;
    score;
    constructor(){
        super("client");
    }
    
    

    
};

module.exports = Client;