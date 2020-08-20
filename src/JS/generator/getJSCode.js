export default function (analysisResult, nestedCode) {
    if (analysisResult.id.match(/S\d+/)) {
        return `runCommand('./${analysisResult.id
		}.js').default({elementName, parentFnParams, scopes, ...${JSON.stringify(
			analysisResult
		)}})`
    } else if (analysisResult.id.match(/E\d+/)) {
        return `applyOp(parseStringValue("${
			analysisResult.target
		}", false, scopes, parentFnParams), () => theComponentCalled(parseStringValue("${
			analysisResult.target
		}", false, scopes, parentFnParams)).attatchHandler(parseStringValue("${
			analysisResult.id
		}", false, scopes, parentFnParams), event => {
			let elementName = parseStringValue("${analysisResult.target}", false, scopes, parentFnParams);
			${nestedCode}
		}))`
    } else if (analysisResult.id.match(/^PROP_[a-zA-Z]+/)) {
        return `"${analysisResult.id.replace(/^PROP_/, "")}": \`${analysisResult.value.replace(/`/gmi,"\\`")}\`,`;
    }
}