module.exports = {
    /**
     * Suma de números
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} n1 primer parámetro de la suma
     * @param {*} n2 segundo parámetro de la suma
     * @returns n1 + n2
     */
    suma: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError());
    },
    /**
     * Resta de números
     * @example
     * n1 = 3, n2 = 2 => resultado 1
     * @param {*} n1 primer parámetro de la resta
     * @param {*} n2 segundo parámetro de la resta
     * @returns n1 - n2
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 - n2 : this.mensajeError());
    },
    /**
     * Multiplicacion de números
     * @example
     * n1 = 4, n2 = 3 => resultado 12
     * @param {*} n1 primer parámetro de la multiplicacion
     * @param {*} n2 segundo parámetro de la multiplicacion
     * @returns n1 * n2
     */
    multiplicacion: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 * n2 : this.mensajeError());
    },
    /**
     * Division de números
     * @example
     * n1 = 10, n2 = 5 => resultado 2
     * @param {*} n1 primer parámetro de la division
     * @param {*} n2 segundo parámetro de la division
     * @returns n1 / n2
     */
    division: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 / n2 : this.mensajeError());
    },
    /**
     * Mensaje de error que se ejecuta cuando no tengamos valores numéricos.
     */
    mensajeError: function() {
        console.log('Un valor o los dos valores no son numéricos');
    },
    /**
     * Comprueba que son valores numéricos
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    esNumero: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        }
        return true;
    }
}