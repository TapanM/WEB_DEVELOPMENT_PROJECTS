const inputs = document.querySelectorAll('.controls input')

function updateValue(){
    const suffix = this.dataset.sizing || '';//becuase hex value has no data set
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change', updateValue));
inputs.forEach(input => input.addEventListener('mousemove', updateValue));

