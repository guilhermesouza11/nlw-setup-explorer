const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-02', '01-06'],
    journal: ['01-02', '01-07','01-12'],
    takePills: ['01-03', '01-04']
};

nlwSetup.setData(data);
nlwSetup.load();