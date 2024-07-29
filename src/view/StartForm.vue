<template>
  <v-container>
    <v-card class="pa-0">
      <v-card-title class="d-flex justify-center">
        Formúlario de início
      </v-card-title>

      <v-card-text class="pa-0">
        <v-stepper
          v-model="currentStep"
          :items="[
            'Dados do Discente',
            'Dados do Curso',
            'Dados da Empresa',
            'Dados do Estágio',
          ]"
          color="green"
        >
          <template v-slot:prev>
            <v-btn variant="outlined" @click="prevStep">Voltar</v-btn>
          </template>

          <template v-slot:next>
            <v-btn variant="tonal" @click="nextStep">{{
              currentStep === 4 ? "Enviar" : "Próximo"
            }}</v-btn>
          </template>

          <!-- Step 1: Dados do Discente -->
            <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.1>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="selectedtype"
                      :items="['sim','não']"
                      label="O estágio é obrigatório"
                      hide-details
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="nome"
                      :rules="nameRules"
                      label="Nome"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="dataNascimento"
                      :rules="requiredRules"
                      label="Data de Nascimento"
                      required
                      v-maska="'##/##/####'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cpf"
                      :rules="cpfRules"
                      label="CPF"
                      required
                      v-maska="'###.###.###-##'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="rg"
                      :rules="requiredRules"
                      label="RG"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-divider class="border-opacity-25"></v-divider>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cep"
                      :rules="requiredRules"
                      label="CEP"
                      required
                      @blur="fetchAddress"
                      v-maska="'#####-###'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="endereco"
                      :rules="requiredRules"
                      label="Endereço"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="bairro"
                      :rules="requiredRules"
                      label="Bairro"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="complemento"
                      label="Complemento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cidade"
                      :rules="requiredRules"
                      label="Cidade"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="uf"
                      :rules="requiredRules"
                      label="UF"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-divider class="border-opacity-25"></v-divider>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="telefoneFixo"
                      :rules="requiredRules"
                      label="Telefone Fixo"
                      required
                      v-maska="'(##) ####-####'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="celular"
                      :rules="requiredRules"
                      label="Celular"
                      required
                      v-maska="'(##) #####-####'"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>

          <!-- Step 2: Dados do Curso -->
            <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.2>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="selectedCourse"
                      :items="courses"
                      label="Curso"
                      hide-details
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="periodo"
                      :rules="requiredRules"
                      label="Período"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="numeroMatricula"
                      :rules="requiredRules"
                      label="Número de Matrícula"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="professorOrientador"
                      :rules="requiredRules"
                      label="Professor(a) Orientador(a)"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
          
          <!-- Step 3: Dados da Empresa -->
            <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.3>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="nomeEmpresa"
                      :rules="requiredRules"
                      label="Nome da Empresa"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cnpj"
                      :rules="cnpjRules"
                      label="CNPJ"
                      required
                      v-maska="'##.###.###/####-##'"
                    ></v-text-field>
                  </v-col>
                  <v-divider class="border-opacity-25"></v-divider>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cepEmpresa"
                      :rules="requiredRules"
                      label="CEP"
                      required
                      @blur="fetchAddressEmpresa"
                      v-maska="'#####-###'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="enderecoEmpresa"
                      :rules="requiredRules"
                      label="Endereço"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="bairroEmpresa"
                      :rules="requiredRules"
                      label="Bairro"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="complementoEmpresa"
                      label="Complemento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cidadeEmpresa"
                      :rules="requiredRules"
                      label="Cidade"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="ufEmpresa"
                      :rules="requiredRules"
                      label="UF"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-divider class="border-opacity-25"></v-divider>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="emailEmpresa"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="telefoneFixoEmpresa"
                      :rules="requiredRules"
                      label="Telefone Fixo"
                      required
                      v-maska="'(##) ####-####'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="celularEmpresa"
                      :rules="requiredRules"
                      label="Celular"
                      required
                      v-maska="'(##) #####-####'"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
          
          <!-- Step 4: Dados do Estágio -->
            <!-- eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.4>
            <v-form v-model="valid">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="duracaoEstagio"
                      :rules="requiredRules"
                      label="Duração do Estágio"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="horarioEstagio"
                      :rules="requiredRules"
                      label="Horário do Estágio"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="atividadesEstagio"
                      :rules="requiredRules"
                      label="Atividades do Estágio"
                      required
                      multiline
                      rows="5"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <bnt-start-form :formData="collectFormData()" />
          </template>
        </v-stepper>
        <v-btn class="bg-blue" @click="logFormFields">ler PDF</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import BntStartForm from "../components/BtnStartForm.vue";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

export default {
  components: {
    BntStartForm,
  },
  data() {
    return {
      currentStep: 1,
      valid: true,
      selectedtype: null,
      nome: "",
      dataNascimento: "",
      cpf: "",
      rg: "",
      cep: "",
      endereco: "",
      bairro: "",
      complemento: "",
      cidade: "",
      uf: "",
      email: "",
      telefoneFixo: "",
      celular: "",
      selectedCourse: null,
      courses: ["Curso 1", "Curso 2", "Curso 3"],
      periodo: "",
      numeroMatricula: "",
      professorOrientador: "",
      nomeEmpresa: "",
      cnpj: "",
      cepEmpresa: "",
      enderecoEmpresa: "",
      bairroEmpresa: "",
      complementoEmpresa: "",
      cidadeEmpresa: "",
      ufEmpresa: "",
      emailEmpresa: "",
      telefoneFixoEmpresa: "",
      celularEmpresa: "",
      duracaoEstagio: "",
      horarioEstagio: "",
      atividadesEstagio: "",
    };
  },
  methods: {
    async logFormFields() {
      const formUrl = "src/assets/pdf/termo-input.pdf";
      const formPdfBytes = await fetch(formUrl).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(formPdfBytes, {
        ignoreEncryption: true,
      });
      const form = pdfDoc.getForm();

      const fields = form.getFields();
      fields.forEach((field) => {
        const type = field.constructor.name;
        const name = field.getName();
        console.log(`${type}: ${name}`);
      });
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep++;
      } else {
        // Enviar os dados aqui
        this.submitForm();
      }
    },
    submitForm() {
      console.log("Formulário enviado");
    },
    collectFormData() {
      return {
        selectedtype: this.selectedtype,
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        cpf: this.cpf,
        rg: this.rg,
        cep: this.cep,
        endereco: this.endereco,
        bairro: this.bairro,
        complemento: this.complemento,
        cidade: this.cidade,
        uf: this.uf,
        email: this.email,
        telefoneFixo: this.telefoneFixo,
        celular: this.celular,
        selectedCourse: this.selectedCourse,
        periodo: this.periodo,
        numeroMatricula: this.numeroMatricula,
        professorOrientador: this.professorOrientador,
        nomeEmpresa: this.nomeEmpresa,
        cnpj: this.cnpj,
        cepEmpresa: this.cepEmpresa,
        enderecoEmpresa: this.enderecoEmpresa,
        bairroEmpresa: this.bairroEmpresa,
        complementoEmpresa: this.complementoEmpresa,
        cidadeEmpresa: this.cidadeEmpresa,
        ufEmpresa: this.ufEmpresa,
        emailEmpresa: this.emailEmpresa,
        telefoneFixoEmpresa: this.telefoneFixoEmpresa,
        celularEmpresa: this.celularEmpresa,
        duracaoEstagio: this.duracaoEstagio,
        horarioEstagio: this.horarioEstagio,
        atividadesEstagio: this.atividadesEstagio,
      };
    },
  },
};
</script>
