export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('about'),
      this.toRoute('contact'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
}
