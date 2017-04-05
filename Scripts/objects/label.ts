module objects {
  /**
   * The Label class represents a createjs Text object with options already predefined
   *
   * @export
   * @class Label
   * @extends {createjs.Text}
   */
  export class Label extends createjs.Text {

    /**
     * Creates an instance of Label.
     *
     * @param {string} textString
     * @param {string} fontSize
     * @param {string} fontType
     * @param {string} fontColor
     * @param {number} x
     * @param {number} y
     * @param {boolean} isCentered
     *
     * @memberOf Label
     */
    constructor(private textString:string,
                private fontSize:string,
                private fontType:string,
                private fontColor:string,
                x:number,
                y:number,
                private isCentered: boolean) {
      super(textString, fontSize + " " + fontType, fontColor);

      // check if Label should be centered
      // and set the anchor point to the middle
      if(this.isCentered) {
        this.regX = this.getMeasuredWidth() * 0.5;
        this.regY = this.getMeasuredHeight() * 0.5;
      }

      // set the location of the Label
      this.x = x;
      this.y = y;
    }
  }
}
