const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{FundoGame: 0},
	{fundoEspinhos: 0},
	{Sólido: 0},
	{fundoPlataforma: 0},
	{fundoAereo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{tonico: 0},
	{Teclado: 0},
	{moedas: 0},
	{Áudio: 0},
	{pontuacao: 0},
	{contadorPontos: 0}
];

self.InstanceType = {
	FundoGame: class extends self.ITiledBackgroundInstance {},
	fundoEspinhos: class extends self.ITiledBackgroundInstance {},
	fundoPlataforma: class extends self.ITiledBackgroundInstance {},
	fundoAereo: class extends self.ITiledBackgroundInstance {},
	tonico: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	moedas: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	pontuacao: class extends self.ITextInstance {}
}