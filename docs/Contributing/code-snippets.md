---
id: code-snippets
title: Useful Code Snippets
sidebar_label: Useful Code Snippets
---

## `scripts` package
Set of snippets you will often find in the `scripts` package.

### Initializing optionally gzipped writers

Given an output file path and a boolean storing information on gzipping the output, an appropriate BufferedOutputStream (for efficient I/O access) is instantiated while if the

```java
File out_filepath;
boolean gzOutput;
// ...instantiate out_filepath and gzOutput
// Initialize output writer
PrintStream OUT = System.out;
if (out_filepath != null) {
	if (gzOutput) {
		OUT = new PrintStream(new BufferedOutputStream(new GZIPOutputStream(new FileOutputStream(out_filepath))));
	} else {
		OUT = new PrintStream(new BufferedOutputStream(new FileOutputStream(out_filepath)));
	}
}
// do stuff
OUT.close()
```

### Parsing optionally gzipped inputs

Checks if input file is gzipped or not, then creates appropriate BufferedReader (for efficient I/O access), and loops through each line with tab-delimited tokenization.
```java
File input;
// ...instantiate input
// Check if file is gzipped and instantiate appropriate BufferedReader
BufferedReader br;
if(GZipUtilities.isGZipped(input)) {
	br = new BufferedReader(new InputStreamReader(new GZIPInputStream(new FileInputStream(input)), "UTF-8"));
} else {
	br = new BufferedReader(new InputStreamReader(new FileInputStream(input), "UTF-8"));
}
// Initialize line variable to loop through
String line = br.readLine();
while (line != null) {
	String[] temp = line.split("\t");
	// do stuff
	line = br.readLine();
}
br.close()
```

## UI snippets
Set of snippets you will often find in the `window_interface` package.

### Color Selection Button
Creates `JButton` object that instantiates a `JColorChooser` dialog when clicked. When the user selects a color, the `setForeground` method is called to set the text color of the JButton object to match the color selected by  the user.

```
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JColorChooser;
// ...
btnSenseColor = new JButton("Sense Color");
// format the position of the button
//  e.g.
//   sl_contentPane.putConstraint(...args...);
btnSenseColor.addActionListener(new ActionListener() {
	public void actionPerformed(ActionEvent arg0) {
		btnSenseColor.setForeground(JColorChooser.showDialog(btnSenseColor, "Select an Output Color",
				btnSenseColor.getForeground()));
	}
});
btnSenseColor.setForeground(new Color(0, 0, 255));
contentPane.add(btnSenseColor);
```
