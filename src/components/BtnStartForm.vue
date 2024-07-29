<!-- BtnStartForm.vue -->
<template>
  <v-btn class="bg-blue" @click="generatePdf">Download PDF</v-btn>
</template>

<script>
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

export default {
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async generatePdf() {
      const formUrl = "src/assets/pdf/termo-input.pdf";
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(formPdfBytes);
      const form = pdfDoc.getForm();

      try {
        const data = this.formData;

        form.getTextField("Text1").setText(data.nome);
        form.getTextField("Text2").setText(data.dataNascimento);
        form.getTextField("Text3").setText(data.cpf);
        form.getTextField("Text4").setText(data.rg);
        form.getTextField("Text5").setText(data.endereco);
        form.getTextField("Text6").setText(data.bairro);
        form.getTextField("Text7").setText(data.complemento);
        form.getTextField("Text8").setText(data.cidade);
        form.getTextField("Text9").setText(data.uf);
        form.getTextField("Text10").setText(data.email);
        form.getTextField("Text11").setText(data.telefoneFixo);
        form.getTextField("Text12").setText(data.celular);

        if (data.selectedtype === 'sim') {
          form.getCheckBox('Button41').check();
          form.getCheckBox('Button42').uncheck();
        } else if (data.selectedtype === 'não') {
          form.getCheckBox('Button41').uncheck();
          form.getCheckBox('Button42').check();
        }

        // Flatten the form to make fields non-editable
        form.flatten();

        
      } catch (err) {
        console.error("Erro ao gerar PDF:", err);
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      saveAs(blob, "termo-de-compromisso-de-estagio.pdf");
    },
  },
};
</script>
